FROM node:21-alpine as builder
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build


FROM node:21-alpine
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --only=production
COPY --from=builder /usr/src/app/dist ./dist

RUN ls dist # Temporarily added for debugging
ENV NODE_ENV=production
EXPOSE 80
CMD ["node", "dist/main"]
