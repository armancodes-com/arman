# ===============================
# Base image
# ===============================
FROM node:22-slim AS base
WORKDIR /app

RUN corepack enable

# ===============================
# Dependencies
# ===============================
FROM base AS deps

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

RUN \
  if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then pnpm install --frozen-lockfile; \
  else echo "No lockfile found" && exit 1; \
  fi

# ===============================
# Build
# ===============================
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID
ARG NEXT_PUBLIC_BASE_URL

ENV NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID=$NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID
ENV NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL

RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then pnpm build; \
  else echo "No lockfile found" && exit 1; \
  fi

# ===============================
# Production runtime
# ===============================
FROM node:22-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Create non-root user
RUN addgroup --system nodejs && adduser --system nextjs --ingroup nodejs

# Copy standalone output
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

# ===============================
# Healthcheck
# ===============================
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:3000 || exit 1

# ===============================
# Start server
# ===============================
CMD ["node", "server.js"]
