# ===============================
# Base image
# ===============================
FROM node:20-alpine AS base
WORKDIR /app

# ===============================
# Install dependencies
# ===============================
FROM base AS deps
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
COPY scripts ./scripts
COPY contentlayer.config.ts ./
COPY tsconfig.json ./
COPY src/utils ./src/utils
COPY src/content ./src/content

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# ===============================
# Build source code
# ===============================
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID
ENV NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID=${NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}

ARG NEXT_PUBLIC_BASE_URL
ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# ===============================
# Production image
# ===============================
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ARG NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID
ENV NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID=${NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}

ARG NEXT_PUBLIC_BASE_URL
ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}

# Add user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built files
COPY --from=builder /app/public ./public
RUN mkdir .next && chown nextjs:nodejs .next
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Install PM2 globally
USER root
RUN npm install -g pm2
USER nextjs

# Expose port
EXPOSE 3000
ENV PORT 3000

# ===============================
# Run Next.js in PM2 cluster mode
# ===============================
CMD ["pm2-runtime", "server.js", "-i", "max"]
