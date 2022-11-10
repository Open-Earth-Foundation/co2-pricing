FROM node:16-slim AS deps
RUN apt-get update
RUN apt-get install -y openssl
WORKDIR /app
COPY package.json yarn.lock ./
COPY prisma ./prisma/ 
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:16-slim AS builder

WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build && yarn install --production --ignore-scripts --prefer-offline

# Production image, copy all the files and run next
FROM node:16-slim AS runner
WORKDIR /app
RUN pwd

ENV NODE_ENV production

RUN groupadd -r nodejs -g 1001
RUN useradd -r nextjs -g 1001
RUN ls

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /app/next.config.mjs ./next.config.mjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

ENV PORT=80
EXPOSE 80

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1

RUN ls

CMD ["yarn", "start"]
