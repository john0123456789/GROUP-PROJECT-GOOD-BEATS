const express = require('express');
const { nextTick } = require('process');
const db = require('../db/models');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const {requireAuth} = require('../auth.js');

router.get('/new', csrfProtection, requireAuth, async(req, res) => {
  const reviews = await db.Review.findAll();
  res.render('reviews', {csrfToken: req.csrfToken(), data: {}, reviews})
})

//router.post()




module.exports = router;
