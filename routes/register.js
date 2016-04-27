'use strict';

const express = require('express');
const router = express.Router();

// const User = require('../models').User;

router.route('/')
  .get((req, res) => {
    res.render('signup');
  })
  .post((req, res) => {
    res.json({success : true});
  });

module.exports = router;