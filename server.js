const express = require('express');
const app = express();
const bodyParser = ('body-parser');

const db = require('./models');
const galleryRoutes = require('./routes/gallery');
const userRoutes = require('./routes/user');

app.set('view engine', 'jade');
app.set('views', './views');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended : true }));

app.use('/gallery', gallery);
app.use('/login', user);

app.listen(3000, function() {
  db.sequelize.sync();
  console.log('server running on port 3000');
});