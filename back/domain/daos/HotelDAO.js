const BaseDAO = require('./BaseDAO')
const models = require('../models')

const hotelOptions = { 
  include: { 
    model: models.Amenity, as: 'amenities', attributes: ['name'] 
  }
}

class HotelDAO extends BaseDAO {
  constructor() {
    super(models.Hotel);
  }

  get(id) {
    return super.get(id, hotelOptions)
  }

  list(filter) {
    return super.list(filter, hotelOptions)
  }
}

module.exports = HotelDAO;