# build stage
FROM node:12.2.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./dart-cart-client/package.json .
RUN npm install --silent
COPY ./dart-cart-client .
CMD ["npm","start"]
