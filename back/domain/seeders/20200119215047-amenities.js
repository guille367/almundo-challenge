'use strict';
const fs = require('fs');
const uniq = require('lodash/uniq');
const hoteles = JSON.parse(fs.readFileSync(`${__dirname}/../../resources/data.json`, 'utf8'));

module.exports = {
  up: (queryInterface, Sequelize) => {
    const amenities = hoteles.map(h => h.amenities)
    const flattenAmenities = amenities.reduce((e,q) => [...e, ...q])
    const uniqueAmenities = uniq(flattenAmenities).map(amenityName => {
      return { name: amenityName }
    })

    return queryInterface.bulkInsert('Amenities', uniqueAmenities, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Amenities', null, {});
  }
};
