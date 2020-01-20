'use strict';
const fs = require('fs');
const omit = require('lodash/omit');
const hoteles = JSON.parse(fs.readFileSync(`${__dirname}/../../resources/data.json`, 'utf8'));

module.exports = {
  up: (queryInterface, Sequelize) => {
    const parsedHotels = hoteles.map(h => omit(h, ['amenities']))
    return queryInterface.bulkInsert('Hotels', parsedHotels, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Hotels', null, {});
  }
};
