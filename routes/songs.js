const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const musicController = require('../controllers/musicController');

router.route('/')
  .get(checkAuth, musicController.getAllSongs);

router.route('/:songId')
  .get(checkAuth, musicController.getSongById)
  .patch(checkAuth, musicController.updateSong)
  .delete(checkAuth, musicController.deleteSong);

module.exports = router;
