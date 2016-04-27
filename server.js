'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const galleryRoute = require('./routes/gallery');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const setUpPassport = require('./passport/setUpPassport');

const app = express();
const db = require('./models');

app.set('view engine', 'jade');
app.set('views', './views');

app.use(cookieParser());
app.use(flash());
app.use(session({secret: 'catbutts', resave: false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
setUpPassport();

app.use('/gallery', galleryRoute);
app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/logout', (req, res) => {
  req.logout();
  res.redirect('/gallery');
});

app.get('/', (req, res) => {
  res.render('index');
});

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('server running on port 3000');
  });
});