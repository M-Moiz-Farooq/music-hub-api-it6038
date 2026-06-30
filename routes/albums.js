const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const musicController = require('../controllers/musicController');

router.route('/')
  .get(checkAuth, musicController.getAllAlbums);

router.route('/:albumId')
  .get(checkAuth, musicController.getAlbumById)
  .patch(checkAuth, musicController.updateAlbum);

module.exports = router;
