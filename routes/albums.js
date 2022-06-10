const express = require('express');
const { nextTick } = require('process');
const db = require('../db/models');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require('../auth.js')
const { check, validationResult } = require('express-validator');

const reviewValidators = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Title'),
  check('content')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Content'),
  check('rating')
    .exists({checkFalsy: true })
    .withMessage('Please provide a value for Rating'),
];


router.get('/', requireAuth, async (req, res) => {
  const albums = await db.Album.findAll();
  res.render('albums', { albums })
})


router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {

  const users = await db.User.findAll();

  const album = await db.Album.findByPk(req.params.id);
  const { userId } = req.session.auth
  const libraries = await db.Library.findAll({ where: { userId } })
  const trackList = album.trackLists.split(',')
  console.log('reqParams: ', req.params)
  const reviews = await db.Review.findAll({
    where: {

      albumId: req.params.id
    }
  })
  res.render('albumEach', { album, trackList, reviews, libraries, csrfToken: req.csrfToken() })
}))

router.get('/:id(\\d+)/reviews/new', csrfProtection, requireAuth, async (req, res) => {
  const album = await db.Album.findByPk(req.params.id);
  const reviews = await db.Review.findAll();
  res.render('reviews', { csrfToken: req.csrfToken(), reviews, album })
})

router.post('/:id(\\d+)', csrfProtection, requireAuth, asyncHandler(async (req, res, next) => {
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

router.get('/:id(\\d+)/reviews/:reviewId(\\d+)', csrfProtection, requireAuth, async(req, res) => {
  const album = await db.Album.findByPk(req.params.id);
  const reviewEdit = await db.Review.findByPk(req.params.reviewId);
  const { reviewId } = req.params
  console.log(reviewEdit.rating)
  res.render('review-edit', {
    title: 'Edit Review',
    reviewEdit,
    reviewId,
    album,
    csrfToken: req.csrfToken(),
  })
})

router.post('/:id(\\d+)/reviews/:reviewId(\\d+)', csrfProtection, requireAuth, reviewValidators, asyncHandler(async (req, res) => {
  const reviewEdit = await db.Review.findByPk(req.params.reviewId)
  const { title, content, rating } = req.body;
  const review = { title, content, rating }

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    await reviewEdit.update({ title, content, rating });
    console.log(reviewEdit)
    res.redirect(`/albums/${req.params.id}`)
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render("review-edit", {
      title: "Edit Review",
      reviewEdit,
      errors,
      csrfToken: req.csrfToken(),
    })
  }
}))


module.exports = router;
