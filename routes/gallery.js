'use strict';

const express = require('express');
const router = express.Router();

const Photo = require('../models').Photo;


router.get('/:id/edit', (req, res) => {
  Photo.findById(req.params.id).then((photo) => {
    res.render('edit', {
          photo: photo
       });
  });
});

router.get('/new', (req, res) => {
  res.render('new');
});

router.route('/:id')
  .get((req, res) => {
    Photo.findById(req.params.id).then((photo) => {
      console.log('hello there');
      res.render('single', {
          photo: photo
       });
    });
  })
  .put((req, res) => {
    console.log(req.body);
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
  .delete((req, res) => {
    Photo.destory({
      where: {
        id: req.params.id
      }
    }).then(() => {
      res.json({success: true});
    });
  });


router.route('/')
  .get((req, res) => {
    Photo.findAll()
    .then((photos) => {
       res.render('gallery', {
          photos: photos
       });
    }).catch((err) => {
      res.json({success: false, err: err});
    });
  })
  .post((req, res) => {
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