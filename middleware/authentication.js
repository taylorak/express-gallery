const Photo = require('../models').Photo;

var authentication = {
  yourPhoto: (req, res, next) => {
    Photo.findById(req.params.id)
      .then((photo)=> {
        if (req.user.id === photo.user_id) {
          return next();
        } else {
          return res.redirect('/gallery/' + req.params.id);
        }
      }).catch((err) => {
            return res.json({success: false, err: err});
      });
  },

  isAuthenticated: (req, res, next) => {
    if (!req.isAuthenticated()) {
      req.flash('info', 'you must be logged in to view this page');
      return res.redirect('/login');
    }
    return next();
    }
};

module.exports = authentication;