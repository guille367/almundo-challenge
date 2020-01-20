const BaseService = require('./BaseService')
const HotelDAO = require('../domain/daos/HotelDAO')

class HotelService extends BaseService {
  constructor() {
    super(HotelDAO);
  }

};

module.exports = HotelService;