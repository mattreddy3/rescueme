FROM node:8 as build-deps
# Create app directory
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
EXPOSE 80
RUN yarn build