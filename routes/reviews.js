const express = require('express');
const { nextTick } = require('process');
const db = require('../db/models');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const {requireAuth} = require('../auth.js');


  router.delete(`/:id(\\d+)`, asyncHandler(async(req, res, next) => {
      const review = await db.Review.findByPk(req.params.id);
      await review.destroy()

      res.json({message: 'Success!'})
    }))


module.exports = router;
