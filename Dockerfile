FROM node@sha256:a251de4db0e0632446c0ba62adbe1e37ff148a53732e4574d2ed0f5462cc4407 AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node@sha256:a251de4db0e0632446c0ba62adbe1e37ff148a53732e4574d2ed0f5462cc4407 AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build

FROM node@sha256:a251de4db0e0632446c0ba62adbe1e37ff148a53732e4574d2ed0f5462cc4407 AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]
