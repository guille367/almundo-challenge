const express = require('express')
const HotelController = require('../controllers/hotelController');
const fileUploaderMiddleware = require('../utils/fileUploaderMiddleware');

const api = express.Router();

api.get('', HotelController.list);
api.post('', fileUploaderMiddleware, HotelController.create);
api.put('/:id', fileUploaderMiddleware, HotelController.update);
api.delete('/:id', HotelController.delete);

module.exports = api;