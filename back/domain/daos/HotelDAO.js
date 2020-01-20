const BaseDAO = require('./BaseDAO')
const models = require('../models')

const hotelOptions = { 
  include: { 
    model: models.Amenity, as: 'amenities', attributes: ['name', 'icon_name'] 
  }
}

class HotelDAO extends BaseDAO {
  constructor() {
    super(models.Hotel);
  }

  get(id) {
    return super.get(id, hotelOptions)
  }

  list(filter, pagination) {
    return super.list(filter, pagination, hotelOptions)
  }
}

module.exports = HotelDAO;