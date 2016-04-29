const Photo = require('../models').Photo;

var authentication = {
  yourPhoto: (req, res, next) => {
        // console.log('REQ USER ', req.user);
    Photo.findById(req.params.id)
      .then((photo)=> {
        // console.log('PHOTO', photo);
        if (req.user.id === photo.user_id) {
          return next();
        }
      }).catch((err) => {
            res.json({success: false, err: err});
        });
      return res.redirect('/gallery/' + req.params.id);
  },

  isAuthenticated: (req, res, next) => {
    console.log('AUTHENTICATION');
    if (!req.isAuthenticated()) {
      return res.redirect('/login');
    }
    return next();
    }
};

module.exports = authentication;