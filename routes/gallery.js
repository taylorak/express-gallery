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
    console.log("GET PHOTO");
    Photo.findAll()
    .then((photos) => {
      let photo;

      for(var i = 0; i < photos.length; i++) {
        if(photos[i].id.toString() === req.params.id) {
          photo = photos.splice(i, 1)[0];
          break;
        }
      }

      if(!photo) {
        console.log("ID does not exist");
        return res.json({success: false, err: "ID DOES NOT EXIST"});
      }

      res.render('single', {
          photo: photo,
          photos: photos.slice(0,3)
       });
    })
    .catch((err) => {
      console.log("PHOTO DATABASE ERROR");
      res.json({success : false, err: err});
    });

  })
  .put(isAuthenticated, yourPhoto, (req, res) => {
    Photo.update({
      author: req.body.author,
      link: req.body.link,
      description: req.body.description,
      user_id: req.user.id
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
    console.log('Delete');
    Photo.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => {
      console.log("redirect");
      return res.redirect('/gallery');
      // res.json({success: true, redirect: '/gallery'});
    }).catch((err) => {
      console.log("delete error", err);
      res.json({success: false, err: err});
    });
  });


router.route('/')
  .get((req, res) => {
    Photo.findAll()
    .then((photos) => {
      console.log(photos[0]);
      res.render('gallery', {
        staticPhoto: photos.shift(),
        photos: photos
      });
    }).catch((err) => {
      console.log("error");
      res.json({success: false, err: err});
    });
  })
  .post(isAuthenticated, (req, res) => {
    Photo.create({
      author: req.body.author,
      link: req.body.link,
      description: req.body.description,
      user_id: req.user.id
    })
    .then(() => {
      res.redirect('/gallery');
    }).catch((err) => {
      res.json({success: false});
    });
  });

module.exports = router;