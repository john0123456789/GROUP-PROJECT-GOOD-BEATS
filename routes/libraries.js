const express = require('express');
const { check, validationResult } = require('express-validator');
const app = require('../app');
const db = require('../db/models');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');


router.get('/:id(\\d+)', async (req, res) => {
    const library = await db.Library.findByPk(req.params.id, {
        include: db.User
    });

    const albums = await db.AlbumLibrary.findAll({ where: { libraryId: req.params.id } })
    // res.send(albums)
    const albumIds = albums.map(album => album.albumId);

    const allAlbums = await db.Album.findAll({
        where: {
            id: albumIds
        }
    });

    // res.send(allAlbums);
    res.render('library', { library, allAlbums, albums })

})

router.get('/', async (req, res) => {
    const {userId} = req.session.auth
    const libraries = await db.Library.findAll({where: {userId}})

    res.render('libraries', { libraries })
})

router.post('/new', csrfProtection, asyncHandler(async (req, res) => {

    const { name, albumId } = req.body
    const { userId } = req.session.auth
    await db.Library.create({
        name,
        userId
    })
    res.redirect(`/albums/${albumId}`)

}))

router.post(`/:id(\\d+)`, asyncHandler(async (req, res) => {
    const { libraryId, albumId } = req.body
    const exists = await db.AlbumLibrary.findOne({ where: { libraryId, albumId } })

    if (!exists) {
        await db.AlbumLibrary.create({
            libraryId,
            albumId
        })
        res.redirect('/albums')
    }
}
))

router.put(`/:id(\\d+)`, async(req, res) => {
    const libraryId = req.params.id;
    // const library = db.Library.findByPk(libraryId);

    // library.name = req.body.name;
    // await library.save()
    console.log('successful')
    
})



module.exports = router;
