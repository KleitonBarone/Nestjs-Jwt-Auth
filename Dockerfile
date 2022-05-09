FROM node:14.17-alpine As development

WORKDIR /usr/src/app

RUN apk update && apk add bash

COPY package*.json ./

RUN yarn install

COPY . .

CMD ["npm", "start:dev"]