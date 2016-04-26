'use strict';

const express = require('express');
const router = express.Router();

const Photo = require('../models').Photo;


router.get('/gallery/:id/edit', (req, res) => {
  Photo.findById(req.params.id).then((photo) => {
    res.json({success: true});
  });
});

router.get('/gallery/new', (req, res) => {
  res.json({success: true});
});

router.route('/gallery/:id')
  .get((req, res) => {
    Photo.findById(req.params.id).then(() => {
      res.json({success: true});
    });
  })
  .put((req, res) => {
    Photo.update({
      author: req.body.author,
      link: req.body.link,
      description: req.body.description
    }, {
      where: {
        id : req.params.id
      }
    }).then(() => {
      res.json({success: true});
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

    }).catch((e) => {
      res.json({success: false, eor: e});
    });
  })
  .post((req, res) =>{
    Photo.create({
      author: req.body.author,
      link: req.body.link,
      description: req.body.description
    })
    .then(() => {
      res.redirect('/gallery');
    }).catch((e) => {
      res.json({success: false});
    });
  });

module.exports = router;