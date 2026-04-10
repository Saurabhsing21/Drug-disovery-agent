FROM node:20-alpine

ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app

# Copy package files first for better caching
COPY package.json package-lock.json* /app/
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Copy all source
COPY . /app

# Ensure prisma client is generated
ENV DATABASE_URL="postgresql://dummy:dummy@localhost:5432/dummy"
RUN npx prisma generate

# Build application
RUN npm run build

ENV NODE_ENV=production

EXPOSE 3001

CMD ["npm", "run", "start", "--", "-p", "3001", "-H", "0.0.0.0"]
