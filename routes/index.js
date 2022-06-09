const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { requireAuth } = require('../auth.js')

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  const { userId } = req.session.auth
  const libraries = await db.Library.findAll({ where: { userId } })
  res.render('index', { title: 'goodbeats', libraries });
}));

module.exports = router;
