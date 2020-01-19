'use strict';

require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const expressErrorManager = require('./utils/expressErrorManager');
const cors = require('cors');
const hotelRouter = require('./routes/hotelRouter')

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors())

app.use('/hoteles', hotelRouter)

app.get('/api', (req, res) => {
  res.send('Hello World');
});

expressErrorManager.setMannager(app)

// app.listen(process.env.PORT, process.env.HOST);
console.log(`lock and loaded at http://${process.env.HOST}:${process.env.PORT}`)
app.listen(process.env.PORT, () => {
  console.log('eyyyy')
});