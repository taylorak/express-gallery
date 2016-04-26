'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const galleryRoute = require('./routes/gallery');

const app = express();

const db = require('./models');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set('view engine', 'jade');
app.set('views', './views');

app.use('/gallery', galleryRoute);

app.get('/', function(req, res) {
  res.render('index');
});

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('server running on port 3000');
  });
});

module.exports = app;