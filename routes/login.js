'use strict';

const express = require('express');
const router = express.Router();
var passport = require('passport');

router.route('/')
  .get((req, res) => {
    res.render('login');
  })
  .post(passport.authenticate('login', {
    successRedirect: '/gallery',
    failureRedirect: '/login',
    failureFlash: false
  }));

module.exports = router;