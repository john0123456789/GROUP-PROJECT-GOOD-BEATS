const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { requireAuth } = require('../auth.js')

// router.get('/', async(req, res) => {
//   const albums = db.Album.findAll();
//   res.render('splashPage', {albums});
// })



module.exports = router;
