# Stage 0
FROM node:14-alpine3.14

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./
RUN yarn

COPY . .
RUN yarn build

# Stage 1
FROM nginx

ADD default.conf /etc/nginx/conf.d/
COPY --from=0 /usr/src/app/dist /usr/share/nginx/html/

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
