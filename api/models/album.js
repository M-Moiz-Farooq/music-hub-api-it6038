const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  title: { type: String, required: true },
  releaseYear: { type: Number },
  artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist' },
  genre: { type: String }
});

module.exports = mongoose.model('Album', albumSchema);
