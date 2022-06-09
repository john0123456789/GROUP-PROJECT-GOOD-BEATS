const express = require('express');
const { nextTick } = require('process');
const db = require('../db/models');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require('../auth.js')

// router.delete('/:libraryid(\\d+/d+)', async (req, res) => {
//     console.log(req.url)
//     res.send('req')
// })

module.exports = router
