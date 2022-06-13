const express = require('express');
const { nextTick } = require('process');
const db = require('../db/models');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const {requireAuth} = require('../auth.js');


  router.delete(`/:id(\\d+)`, requireAuth, asyncHandler(async(req, res, next) => {
      const review = await db.Review.findByPk(req.params.id);
      await review.destroy()

      res.json({message: 'Success!'})
    }))



  // for future use to make edit review dynamic (in progress)

  // router.put('/:id(\\d+)', async(req, res) => {
  //     const review = await Review.findByPk(req.params.id)
  //     review.title = req.body.title
  //     review.content = req.body.content
  //     review.rating = req.body.rating
  //     await review.save()

  //     res.json({message: 'Success!', post})
  //   })



module.exports = router;
