const BaseDAO = require('./BaseDAO')
const models = require('../models')

const hotelOptions = { 
  include: { 
    model: models.Amenity, as: 'amenities', attributes: ['name']
  },
  distinct: true
}

class HotelDAO extends BaseDAO {
  constructor() {
    super(models.Hotel);
  }

  get(id) {
    return super.get(id, hotelOptions);
  }

  list(filter) {
    return super.list(filter, hotelOptions);
  }

  create(entity) {
    return super.create(entity).then(hotel => {
      JSON.parse(entity.amenities).forEach(amenity => {
        models.HotelAmenity.create({ hotel_id: hotel.id, amenity_id: amenity });
      });
      return hotel;
    });
  }

  update(id, entity) {
    return super.update(id, entity).then(hotel => {
      JSON.parse(entity.amenities).forEach(amenity => {
        models.HotelAmenity.destroy({where: { hotel_id: id }})
        models.HotelAmenity.create({ hotel_id: id, amenity_id: amenity })
        return hotel;
      });
    });
  }
}

module.exports = HotelDAO;