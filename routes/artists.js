const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const musicController = require('../controllers/musicController');

router.route('/')
  .get(checkAuth, musicController.getAllArtists);

router.route('/:artistId')
  .get(checkAuth, musicController.getArtistById)
  .delete(checkAuth, musicController.deleteArtist);

module.exports = router;
