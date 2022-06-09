const express = require('express');
const { nextTick } = require('process');
const db = require('../db/models');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');

router.get('/', async(req, res) => {
  const albums = await db.Album.findAll();
  res.render('albums', {albums})
})

router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
  const users = await db.User.findAll();
  const album = await db.Album.findByPk(req.params.id);
  // if(!album){
  //   res.render('error')
  // }
  console.log(req.body)
  const trackList = album.trackLists.split(',')
  console.log('reqParams: ', req.params)
  const reviews = await db.Review.findAll({
    where: {
      albumId: req.params.id,
    }
  })
  res.render('albumEach', { album, trackList, reviews })
}))



module.exports = router;
