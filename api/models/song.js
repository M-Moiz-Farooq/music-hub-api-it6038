const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String },
  duration: { type: Number },
  releaseYear: { type: Number },
  artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist' },
  album: { type: mongoose.Schema.Types.ObjectId, ref: 'Album' }
});

module.exports = mongoose.model('Song', songSchema);
