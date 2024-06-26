FROM node:22.1.0-alpine AS builder 
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
