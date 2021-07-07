# STAGE 1: BUILD APP

# BASE NODE-ALPINE IMAGE FOR BUILDING THE APP
FROM node:16-alpine AS step-1

LABEL maintainer="cruzchavarria925@hotmail.com"

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

# STAGE 2: DEPLOY TO NGINX SERVER

FROM nginx:latest

COPY --from=step-1 /app/build /usr/share/nginx/html

#COPY /build /usr/share/nginx/html

# ADDS A NEW USER SO THAT NGINX DOESN'T RUN AS ROOT SINCE IT'S NOT ALLOWED ON WCNP

RUN adduser --system --uid 1000 --group --shell /sbin/nologin --home /usr/share/nginx/ app

RUN chown -R 1000:1000 /var/cache/nginx && chown -R 1000:1000 /var/log/nginx && chown -R 1000:1000 /var/run/

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

USER 1000

EXPOSE 8080