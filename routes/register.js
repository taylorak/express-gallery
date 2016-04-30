'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const router = express.Router();

const User = require('../models').User;

const saltRounds = 10;

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
        req.flash('error', 'Username already exists');
        return res.redirect('/register');
      } else {
        bcrypt.hash(password, saltRounds, (err, hash) => {
          User.create({
            username: username,
            password: hash
          })
          .then((user) => {
            req.login(user, (err) => {
              if(err) {
                return next(err);
              }
              return res.redirect('/gallery');
            });
          });
        });
      }
    });
  });

module.exports = router;