const express = require('express');
const { nextTick } = require('process');
const db = require('../db/models');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');

router.get('/', async(req, res) => {
  const albums = await db.Album.findAll();
  res.render('albums', {albums})
})

router.get('/:id(\\d+)', asyncHandler(async(err, req, res, next) => {
  const album = await db.Album.findByPk(req.params.id, {
    // include: db.Review
  });
  if(!album){
    res.render('error')
  }
  const trackList = album.trackLists.split(',')
  res.render('albumEach', { album, trackList })
}))


module.exports = router;
