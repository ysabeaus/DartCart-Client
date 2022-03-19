# build stage
FROM tiangolo/node-frontend:10 as build-stage
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./dart-cart-client/package*.json /app/
RUN npm install --silent
COPY ./dart-cart-client /app/
RUN npm run build

# final stage
FROM nginx:latest
COPY --from=build-stage /app/build /usr/share/nginx/html

# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf