FROM node:latest AS node
WORKDIR /kafka-producer-starter
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:1.17.1-alpine
COPY --from=node /kafka-producer-starter/dist/kafka-producer-starter/ /usr/share/nginx/html
