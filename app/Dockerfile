FROM node:20-alpine AS base
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Valeur par défaut (peut être écrasée par Docker Compose)
ENV PORT=3000

EXPOSE ${PORT}

CMD ["sh", "-c", "npm run start -- --hostname 0.0.0.0 --port $PORT"]