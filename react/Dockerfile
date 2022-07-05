FROM node:18.4.0-alpine3.15

WORKDIR /react

COPY /package*.json /yarn.lock /react/

RUN yarn install

COPY ./ /react/