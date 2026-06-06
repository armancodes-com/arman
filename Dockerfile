###############################################################################
# ========================== BASE IMAGE CONFIG ===============================
###############################################################################
# You can override this in your CI/CD pipeline with:
#   docker build --build-arg BASE_IMAGE=node:22-bullseye-slim .
ARG BASE_IMAGE="node:22-bullseye-slim"
FROM ${BASE_IMAGE} AS base

WORKDIR /usr/src/app

# Optional pre-commands (for registry config, environment setup, etc.)
ARG PRE_COMMAND="echo 'No pre-command provided'"
RUN ${PRE_COMMAND}

###############################################################################
# ======================== DEPENDENCIES INSTALLATION ==========================
###############################################################################
FROM base AS deps

# Copy package manager lockfiles for proper dependency resolution
COPY --chown=node:node package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./

# Optional installation flags (for CI/CD customizations)
ARG INSTALL_FLAGS=""

# Install dependencies based on available lockfile
RUN \
    if [ -f yarn.lock ]; then yarn install --frozen-lockfile $INSTALL_FLAGS; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm install --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci --ignore-scripts $INSTALL_FLAGS; \
    elif [ -f package.json ]; then npm install $INSTALL_FLAGS; \
    else echo "No lockfile found. Aborting." && exit 1; \
    fi

# Clean up npmrc to prevent leaking registry credentials
RUN rm -f .npmrc

###############################################################################
# ============================== BUILD STAGE ==================================
###############################################################################
FROM base AS builder

# Set environment for optimized builds
ENV NODE_ENV=production

# Copy dependencies from previous stage
COPY --from=deps /usr/src/app/node_modules ./node_modules

# Copy the rest of the application source
COPY . .

# Optional build flags for CI/CD
ARG BUILD_FLAGS=""

# Force Next.js to generate standalone output
ENV NEXT_PRIVATE_STANDALONE="true"

# Build the application
RUN \
    if [ -f yarn.lock ]; then yarn build $BUILD_FLAGS; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm build $BUILD_FLAGS; \
    elif [ -f package-lock.json ]; then npm run build $BUILD_FLAGS; \
    else echo "No lockfile found. Aborting build." && exit 1; \
    fi

###############################################################################
# ========================== EXPORT STAGE (Nginx) =============================
###############################################################################
FROM nginx:alpine AS export
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
WORKDIR /var/www/html
COPY --from=builder /usr/src/app/out ./
CMD ["nginx", "-g", "daemon off;"]

###############################################################################
# ========================== DEFAULT STAGE (Node) =============================
###############################################################################
FROM base AS default
WORKDIR /var/www/html
COPY --from=builder /usr/src/app /var/www/html
ENV PORT=3000
CMD ["npm", "run", "start", "--", "--port=$PORT"]

###############################################################################
# ============================== RUNNER STAGE =================================
###############################################################################
FROM ${BASE_IMAGE} AS runner

# Run as non-root user for better security
USER node

WORKDIR /usr/src/app

# Copy only the minimal runtime output from the builder
COPY --from=builder --chown=node:node /usr/src/app/public ./public
COPY --from=builder --chown=node:node /usr/src/app/.next/standalone ./
COPY --from=builder --chown=node:node /usr/src/app/.next/static ./.next/static

# Default runtime environment
ENV NODE_ENV=production
ENV PORT=3000

# Expose the Next.js app port
EXPOSE 3000
ENV HOSTNAME=0.0.0.0

# Start the app using Next.js standalone server
CMD ["node", "server.js"]
