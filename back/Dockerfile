FROM node:12.14.1

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
COPY . .

RUN npm install sequelize sequelize-cli

RUN npm install pm2 -g

CMD ["pm2-runtime", "server.js"]