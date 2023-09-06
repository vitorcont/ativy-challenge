FROM node:16.14.0-alpine as builder
WORKDIR /app
COPY package.json .
RUN npm instal --force
COPY . .
RUN npm run build

FROM nginx:latest
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
RUN ls
COPY --from=builder /app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]