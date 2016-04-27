var passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

var User = require('../models').User;


function setUpPassport() {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use('login', new LocalStrategy(
    function(username, password, done) {
    User.findOne({username: username})
    .then(function(user) {
      if(!user) {
        return done(null, false, {message: "No user has that username."});
      }
      if (user.password === password) {
        return done(null, user);
      } else {
        return done(null, false, {message: "Invalid password."});
      }
    })
    .catch(function(err) {
      return done(err);
    });
  }));
}

module.exports = setUpPassport;
