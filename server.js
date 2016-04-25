'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const galleryRoute = require('./routes/gallery');

const app = express();

const db = require('./models');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.json({success: true});
});

app.use('/gallery', galleryRoute);

app.set('view engine', 'jade');
app.set('views', './views');

app.listen(3000, () => {
  db.sequelize.sync();
  console.log('server running on port 3000');
});