'use strict';

const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middleware/authentication').isAuthenticated;
const yourPhoto = require('../middleware/authentication').yourPhoto;
const Photo = require('../models').Photo;


router.get('/:id/edit', (req, res) => {
  Photo.findById(req.params.id)
  .then((photo) => {
    res.render('edit', {
          photo: photo
       });
  })
  .catch((err) => {
    res.json({success : false, err: err});
  });
});

router.get('/new', isAuthenticated, (req, res) => {
  res.render('new');
});

router.route('/:id')
  .get((req, res) => {
    Photo.findById(req.params.id)
    .then((photo) => {
      res.render('single', {
          photo: photo
       });
    })
    .catch((err) => {
      res.json({success : false, err: err});
    });
  })
  .put(isAuthenticated, yourPhoto, (req, res) => {
    Photo.update({
      author: req.body.author,
      link: req.body.link,
      description: req.body.description
    }, {
      where: {
        id : req.params.id
      }
    }).then(() => {
     res.redirect('/gallery/' + req.params.id);
    }).catch((err) => {
      res.json({success : false, err: err});
    });
  })
  .delete(isAuthenticated, yourPhoto, (req, res) => {
    Photo.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => {
      res.json({success: true, redirect: '/gallery'});
    });
  });


router.route('/')
  .get((req, res) => {
    Photo.findAll()
    .then((photos) => {
      console.log('PHOTOS', photos);
      console.log('IS AUTH', req.isAuthenticated());
      console.log('UN', req.user);

       res.render('gallery', {
          photos: photos,
          isAuthenticated: req.isAuthenticated()
       });
    }).catch((err) => {
      res.json({success: false, err: err});
    });
  })
  .post(isAuthenticated, (req, res) => {
    Photo.create({
      author: req.body.author,
      link: req.body.link,
      description: req.body.description
    })
    .then(() => {
      res.redirect('/gallery');
    }).catch((err) => {
      res.json({success: false});
    });
  });

module.exports = router;