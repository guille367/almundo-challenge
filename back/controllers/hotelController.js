const GenericController = require('./genericController')
const HotelFilter = require('../services/filters/HotelFilter')
const HotelService = require('../services/HotelService')

class HotelController extends GenericController {
  static async list(req, res, next) { 
    const filter = new HotelFilter(req.query);
    const service = new HotelService();
    const hotel = await service.list(filter)
    res.send(hotel)
  }

  static async create(req, res, next) { 
    const service = new HotelService();
    const hotel = await service.create(req.body)
    res.send(hotel)
  }

  static async update(req, res, next) { 
    const service = new HotelService();
    const hotel = await service.update(req.params.id, req.body)
    res.send(hotel)
  }

  static async delete(req, res, next) { 
    const service = new HotelService();
    console.log(req.params.id)
    await service.delete(req.params.id)
    res.send()
  }
}

module.exports = HotelController;