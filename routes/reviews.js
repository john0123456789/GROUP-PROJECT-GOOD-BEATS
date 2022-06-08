const express = require('express');
const { nextTick } = require('process');
const db = require('../db/models');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const {requireAuth} = require('../auth.js');


router.get('/', async(req, res) => {
  const reviews = await db.Review.findAll();
  res.send(reviews);
})

router.get('/new', csrfProtection, requireAuth, async(req, res) => {
  const albums = await db.Album.findAll();
  const reviews = await db.Review.findAll();
  res.render('reviews', {csrfToken: req.csrfToken(), reviews, albums})
})

router.post('/', csrfProtection, requireAuth, asyncHandler(async(req, res, next) => {
  const { title, content, rating, userId, albumId } = req.body;
  const review = await db.Review.create({
    title,
    content,
    rating,
    userId: req.session.auth.userId,
    albumId
  })
  return res.redirect(`/`)
}))



module.exports = router;
