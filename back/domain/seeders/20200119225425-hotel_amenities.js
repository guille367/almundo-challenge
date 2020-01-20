'use strict';

const fs = require('fs');
const hoteles = JSON.parse(fs.readFileSync(`${__dirname}/../../resources/data.json`, 'utf8'));
// const { Hotels } = require('../models/hotel');
const models = require('../models/index')

module.exports = {
  up: async (queryInterface) => {
    const amenitiesByHotelPromises = hoteles.map(async (hotel) => {
      const res = models.Amenity.findAll({
        where: {
          name: hotel.amenities
        }
      })
      return res.then(findedAmenities => {
        return findedAmenities.map(a => {return { amenity_id: a.dataValues.id, hotel_id: hotel.id }})
      })
    })
    
    return Promise.all(amenitiesByHotelPromises.map(async amenitiesByHotel => {
      const amenityHotel = await amenitiesByHotel
      await queryInterface.bulkInsert('HotelAmenities', amenityHotel)
    }))
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('HotelAmenities', null, {});
  }
};
