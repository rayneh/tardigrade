# Stage 1: Build the application
FROM node:21-alpine as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Setup production environment
FROM node:21-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY --from=builder /usr/src/app/dist ./dist
# After COPY --from=builder /usr/src/app/dist ./dist
RUN ls dist # Temporarily added for debugging
ENV NODE_ENV=production
EXPOSE 3001
CMD ["node", "dist/main"]
