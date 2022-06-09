const express = require('express');
const { nextTick } = require('process');
const db = require('../db/models');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require('../auth.js')

router.delete('/:libraryId(\\d+)/:albumId(\\d+)', asyncHandler(async (req, res) => {
    const { libraryId, albumId } = req.params
    // console.log(libraryId)
    // console.log(albumId)
    const lib = await db.AlbumLibrary.findOne({ where: { libraryId, albumId } })
    await lib.destroy()
}))

module.exports = router
