'use strict';

const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middleware/authentication').isAuthenticated;
const yourPhoto = require('../middleware/authentication').yourPhoto;
const Photo = require('../models').Photo;


router.get('/:id/edit', (req, res, next) => {
  Photo.findById(req.params.id)
  .then((photo) => {
    if(!photo) {
      return next({status: 404, message: 'Photo not Found'});
    }
    res.render('edit', {
      photo: photo
    });
  })
  .catch((err) => {
    return next({status: 500, message: 'Error Finding Photo'});
  });
});

router.get('/new', isAuthenticated, (req, res) => {
  res.render('new');
});

router.route('/:id')
  .get((req, res, next) => {
    Photo.findAll()
    .then((photos) => {
      let photo;

      for(let i = 0; i < photos.length; i++) {
        if(photos[i].id.toString() === req.params.id) {
          photo = photos.splice(i, 1)[0];
          break;
        }
      }

      if(!photo) {
        return next({status: 404, message: 'Photo not Found'});
      }

      res.render('single', {
          photo: photo,
          photos: photos.slice(0,3)
       });
    })
    .catch((err) => {
      return next({status: 500, message: 'Error Finding Photo'});
    });

  })
  .put(isAuthenticated, yourPhoto, (req, res, next) => {
    Photo.update({
      author: req.body.author,
      link: req.body.link,
      description: req.body.description,
      user_id: req.user.id
    }, {
      where: {
        id : req.params.id
      }
    }).then((photo) => {

      if(!photo) {
        return next({status: 404, message: 'Photo not Found'});
      }

     res.redirect('/gallery/' + req.params.id);
    }).catch((err) => {
      return next({status: 500, message: 'Error Finding Photo'});
    });
  })
  .delete(isAuthenticated, yourPhoto, (req, res) => {
    Photo.destroy({
      where: {
        id: req.params.id
      }
    }).then((photo) => {
      if(!photo) {
        return next({status: 404, message: 'Photo not Found'});
      }

      return res.redirect('/gallery');
    }).catch((err) => {
      return next({status: 500, message: 'Error Finding Photo'});
    });
  });


router.route('/')
  .get((req, res, next) => {
    Photo.findAll()
    .then((photos) => {
      res.render('gallery', {
        staticPhoto: photos.shift(),
        photos: photos
      });
    }).catch((err) => {
      return next({status: 500, message: 'Error Finding Photo'});
    });
  })
  .post(isAuthenticated, (req, res, next) => {
    Photo.create({
      author: req.body.author,
      link: req.body.link,
      description: req.body.description,
      user_id: req.user.id
    })
    .then((photo) => {
      res.redirect('/gallery');
    }).catch((err) => {
      return next({status: 500, message: 'Error Finding Photo'});
    });
  });

module.exports = router;