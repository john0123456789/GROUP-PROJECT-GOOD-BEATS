const express = require('express');
const { nextTick } = require('process');
const db = require('../db/models');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require('../auth.js')

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

router.get('/:id(\\d+)/reviews/new', csrfProtection, requireAuth, async(req, res) => {
  const album = await db.Album.findByPk(req.params.id);
  const reviews = await db.Review.findAll();
  res.render('reviews', {csrfToken: req.csrfToken(), reviews, album})
})

router.post('/:id(\\d+)', csrfProtection, requireAuth, asyncHandler(async(req, res, next) => {
  const { title, content, rating, userId, albumId } = req.body;
  const review = await db.Review.create({
    title,
    content,
    rating,
    userId: req.session.auth.userId,
    albumId: req.params.id
  })
  return res.redirect(`/albums/${req.params.id}`)
}))



module.exports = router;
