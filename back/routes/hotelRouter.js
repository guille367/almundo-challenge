const express = require('express')
const HotelController = require('../controllers/hotelController');

const api = express.Router();

api.get('', HotelController.list);
api.post('', HotelController.create);
api.put('/:id', HotelController.update);
api.delete('/:id', HotelController.delete);
module.exports = api;