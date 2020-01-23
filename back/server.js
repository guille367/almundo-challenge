'use strict';

require('dotenv').config()

const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const qs = require('qs');
const expressErrorManager = require('./utils/expressErrorManager');
const cors = require('cors');
const hotelRouter = require('./routes/hotelRouter')

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('', (req,res, next) => {
  req.query = qs.parse(req.query);
  next();
});

app.use(cors())

app.use(fileUpload());

app.use(express.static('assets/images'));

app.use('/hoteles', hotelRouter)

app.get('/api', (req, res) => {
  res.send('Hello World');
});

expressErrorManager.setMannager(app)

// app.listen(process.env.PORT, process.env.HOST);
console.log(`lock and loaded at http://${process.env.HOST}:${process.env.PORT}`)
app.listen(process.env.PORT);