FROM node:12.14.0-alpine3.11

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
