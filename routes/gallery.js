'use strict';

const express = require('express');
const router = express.Router();

const Photo = require('../models').Photo;

router.get('/gallery/:id/edit', function(req, res) {
  res.json({success: true});
});

router.get('/gallery/new', function(req, res) {
  res.json({success: true});
});

router.route('/gallery/:id')
  .get(function(req, res) {
    res.json({success: true});
  })
  .put(function(req, res) {
    res.json({success: true});
  })
  .delete(function(req, res) {
    res.json({success: true});
  });


router.route('/')
  .get(function(req, res) {
    Photo.findAll()
    .then(function() {
      res.json({success: true});
    }).catch(function(err) {
      res.json({success: false, error: err});
    });
  })
  .post(function(req, res) {
    Photo.create({
      author: req.body.author,
      link: req.body.link,
      description: req.body.description
    })
    .then(function() {
      res.json({success: true});
    }).catch(function(err) {
      res.json({success: false});
    });
  });

module.exports = router;