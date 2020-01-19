const express = require('express')
const HotelController = require('../controllers/hotelController');

const api = express.Router();

api.get('', HotelController.list);

module.exports = api;