FROM node:12.14.1

WORKDIR /app
COPY package.json ./package.json

RUN npm install
COPY . ./app

RUN npm install -g sequelize sequelize-cli pg

RUN npm install pm2 -g