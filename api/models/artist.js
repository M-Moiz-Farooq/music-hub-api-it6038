const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String },
  genre: { type: String },
  activeSince: { type: Number }
});

module.exports = mongoose.model('Artist', artistSchema);
