FROM node:8 as build-deps
# Create app directory
WORKDIR /usr/src/app
COPY package.json yarn.lock default.conf ./
RUN yarn
COPY . ./
RUN yarn build

FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
COPY --from=build-deps /usr/src/app/default.conf /etc/nginx/conf.d/
EXPOSE 80
ENV STAGE dev
CMD ["nginx", "-g", "daemon off;"]