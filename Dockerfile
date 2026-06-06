# ===============================
# Base
# ===============================
FROM node:22-slim AS base
WORKDIR /app

# Enable Corepack (needed for pnpm/yarn if used)
RUN corepack enable

# ===============================
# Dependencies (cached layer)
# ===============================
FROM base AS deps

COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./

# Install dependencies (full install for build safety)
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  elif [ -f pnpm-lock.yaml ]; then pnpm install --frozen-lockfile; \
  else echo "No lockfile found" && exit 1; \
  fi

# ===============================
# Builder
# ===============================
FROM base AS builder
WORKDIR /app

# Copy dependencies
COPY --from=deps /app/node_modules ./node_modules

# Copy everything (needed for Contentlayer + build scripts)
COPY . .

# Environment build args
ARG NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID
ARG NEXT_PUBLIC_BASE_URL

ENV NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID=$NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID
ENV NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL

# IMPORTANT:
# Your package.json already handles:
# contentlayer-build.cjs + next build
RUN npm run build

# ===============================
# Runtime (minimal production image)
# ===============================
FROM node:22-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Create non-root user
RUN addgroup --system nodejs && adduser --system nextjs --ingroup nodejs

# Copy Next standalone output
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

# ===============================
# Healthcheck (Coolify friendly)
# ===============================
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "fetch('http://localhost:3000').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

# ===============================
# Start server (Next standalone)
# ===============================
CMD ["node", "server.js"]
