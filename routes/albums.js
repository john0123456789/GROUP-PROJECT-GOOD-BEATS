const express = require('express');
const { nextTick } = require('process');
const db = require('../db/models');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');

router.get('/', async(req, res) => {
  const albums = await db.Album.findAll();
  res.render('albums', {albums})
})

router.get('/:id(\\d+)',csrfProtection, asyncHandler(async(req, res) => {
  const album = await db.Album.findByPk(req.params.id);
  const {userId} = req.session.auth
  const libraries = await db.Library.findAll({where: {userId}})
  const trackList = album.trackLists.split(',')
  const reviews = await db.Review.findAll({
    where: {
      albumId: req.params.id
    }})
  res.render('albumEach', { album, trackList, reviews, libraries, csrfToken: req.csrfToken()})
}))



module.exports = router;
