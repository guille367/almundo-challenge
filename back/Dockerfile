FROM node:12.14.1

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
COPY . .

# RUN wget https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh
# RUN ["chmod", "+x", "./wait-for-it.sh"]
RUN npm install sequelize sequelize-cli

# ENTRYPOINT ["./wait-for-it.sh", "almundo-db:5432", "--", "node", "server.js"]
CMD ["node", "server.js"]