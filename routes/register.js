'use strict';

const express = require('express');
const router = express.Router();
var passport = require('passport');

const User = require('../models').User;

router.route('/')
  .get((req, res) => {
    res.render('register');
  })
  .post((req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;

    User.findOne({where: { username: username}})
    .then((user) => {
      if(user) {
        req.flash('error', 'user already exists');
        return res.redirect('/register');
      } else {
        User.create({
          username: username,
          password: password
        })
        .then((user) => {
          req.login(user, (err) => {
            if(err) {
              return next(err);
            }
            return res.redirect('/gallery');
          });
        });
      }
    });
  });

module.exports = router;