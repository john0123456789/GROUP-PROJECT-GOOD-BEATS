const express = require('express');
const { nextTick } = require('process');
const db = require('../db/models');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const {requireAuth} = require('../auth.js');


router.get('/:id(\\d+)', csrfProtection, requireAuth, async(req, res) => {
    const album = await db.Album.findByPk(req.params.id);
    const reviews = await db.Review.findByPk(req.params.id);
    res.render('review-edit', {csrfToken: req.csrfToken(), reviews, album})
  })


  router.delete(`/:id(\\d+)`, asyncHandler(async(req, res, next) => {
      const review = await db.Review.findByPk(req.params.id);
      await review.destroy()

      res.json({message: 'Success!'})
    }))

  router.put('/:id(\\d+)', async(req, res) => {
      const review = await Review.findByPk(req.params.id)
      review.title = req.body.title
      review.content = req.body.content
      review.rating = req.body.rating
      await review.save()

      res.json({message: 'Success!', post})
    })

module.exports = router;
