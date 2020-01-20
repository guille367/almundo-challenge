const GenericController = require('./genericController')
const HotelFilter = require('../services/filters/HotelFilter')
const HotelService = require('../services/HotelService')

class HotelController extends GenericController {
    // static getPokemons(req, res, next) {
    //     const filter = new PokemonFilter()
    //     filter.fillData(req.query)
    //     PokemonController.resolve(next,
    //             Promise.all([
    //                 PokemonService.find(filter), 
    //                 PokemonService.count(filter)
    //             ]), results => {
    //         res.status(200).send({
    //             data: {
    //                 list: PokemonAssembler.toDTOs(results[0]),
    //                 total:results[1],
    //                 offset: filter.pagination.offset,
    //                 limit: filter.pagination.limit
    //             }
    //         })
    //     })
    // }
  static async list(req, res, next) { 
    const filter = new HotelFilter(req.query);
    const service = new HotelService();
    const hotel = await service.list(filter)
    res.send(hotel)
  }
}

module.exports = HotelController;