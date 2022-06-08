const express = require('express');
const { check, validationResult } = require('express-validator');
const app = require('../app');
const db = require('../db/models');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');


router.get('/:id(\\d+)', async(req, res) => {
    const library = await db.Library.findByPk(req.params.id, {
        include: db.User
    });

    const albums = await db.AlbumLibrary.findAll({where: {libraryId: req.params.id}})

    const albumIds = albums.map(album => album.albumId);
    
    const allAlbums = await db.Album.findAll({where: {
        id: albumIds
    }});
    
    // res.send(allAlbums);
    res.render('library', {library, allAlbums})

})



module.exports = router;