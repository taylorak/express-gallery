'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const galleryRoute = require('./routes/gallery');

const db = require('./models');
var Photo = db.Photo;

const app = express();

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  req.Photo = Photo;
  next();
});

app.get('/', function(req, res) {

});

app.use('/gallery', galleryRoute);

app.set('view engine', 'jade');
app.set('views', './views');

app.listen(3000, () => {
  db.sequelize.sync();
  console.log('server running on port 3000');
});