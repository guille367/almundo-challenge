'use strict';

const fs = require('fs');
const hoteles = JSON.parse(fs.readFileSync(`${__dirname}/../../resources/data.json`, 'utf8'));
// const { Hotels } = require('../models/hotel');
const models = require('../models/index')

module.exports = {
  up: async (queryInterface) => {
    // const q = await models.Amenity.findAll({ where: { name: hoteles[0].amenities } })

    // const amenitiesByHotelPromises = hoteles.map((hotel) => {
    //   return models.Amenity.findAll({
    //     where: {
    //       name: hotel.amenities
    //     }
    //   })
    // })
    

    // const amenitiesByHotelResult = await Promise.all(amenitiesByHotelPromises.map(amenitiesByHotel => {
    //   return amenitiesByHotel.map(e => { return { id:e.id, name:e.name, hotel: e.hotel  }})
    // }))
    // console.log(amenitiesByHotelResult)
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

  down: (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('HotelAmenities', null, {});
  }
};
