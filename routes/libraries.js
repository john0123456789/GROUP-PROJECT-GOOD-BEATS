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
router.get('/', async(req, res) => {
    const libraries = await db.Library.findAll()

    res.render('libraries', {libraries})
})

router.post('/new', csrfProtection, asyncHandler(async(req, res)=> { 

   const {name, albumId} = req.body
   const {userId} = req.session.auth
    await db.Library.create({
        name,
        userId
    })
    res.redirect(`/albums/${albumId}`)
    console.log("hello")
}))



module.exports = router;