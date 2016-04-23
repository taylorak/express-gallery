'use strict';

const express    = require('express'),
      app        = express(),
      bodyParser = require('body-parser'),
      db         = require('./models');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'jade');
app.set('views', './views');

app.listen(3000, () => {
  db.sequelize.sync();
  console.log('server running on port 3000');
});