var passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

var User = require('../models').User;

var setUpPassport = () => {

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id)
    .then((user) => {
      done(null, user);
    });
  });

  passport.use('login', new LocalStrategy(
    (username, password, done) => {
      console.log("LOGIN");
    User.findOne({where: {username: username}})
    .then((user) => {
      console.log('LOGIN', user);
      if(!user) {
        console.log('NO USER');
        return done(null, false, {message: "No user has that username."});
      }
      if (user.password === password) {
        return done(null, user);
      } else {
        return done(null, false, {message: "Invalid password."});
      }
    })
    .catch((err) => {
      return done(err);
    });
  }));
};

module.exports = setUpPassport;
