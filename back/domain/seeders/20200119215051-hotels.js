'use strict';
const fs = require('fs');
const omit = require('lodash/omit');
const hoteles = JSON.parse(fs.readFileSync(`${__dirname}/../../resources/data.json`, 'utf8'));

module.exports = {
  up: (queryInterface, Sequelize) => {
    const parsedHotels = hoteles.map(h => omit(h, ['amenities']))
    return queryInterface.bulkInsert('Hotels', parsedHotels, {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Hotels', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
