const Song = require('../api/models/song');
const Artist = require('../api/models/artist');
const Album = require('../api/models/album');
const mongoose = require('mongoose');

const isValidId = id => mongoose.Types.ObjectId.isValid(id);

exports.getAllSongs = async (req, res, next) => {
  try {
    const songs = await Song.find().populate('artist album');
    res.status(200).json(songs);
  } catch (err) {
    next(err);
  }
};

exports.getSongById = async (req, res, next) => {
  try {
    if (!isValidId(req.params.songId)) return res.status(404).json({ message: 'Song not found' });
    const song = await Song.findById(req.params.songId).populate('artist album');
    if (!song) return res.status(404).json({ message: 'Song not found' });
    res.status(200).json(song);
  } catch (err) {
    next(err);
  }
};

exports.getAllArtists = async (req, res, next) => {
  try {
    const artists = await Artist.find();
    res.status(200).json(artists);
  } catch (err) {
    next(err);
  }
};

exports.getArtistById = async (req, res, next) => {
  try {
    if (!isValidId(req.params.artistId)) return res.status(404).json({ message: 'Artist not found' });
    const artist = await Artist.findById(req.params.artistId);
    if (!artist) return res.status(404).json({ message: 'Artist not found' });
    res.status(200).json(artist);
  } catch (err) {
    next(err);
  }
};

exports.getAllAlbums = async (req, res, next) => {
  try {
    const albums = await Album.find().populate('artist');
    res.status(200).json(albums);
  } catch (err) {
    next(err);
  }
};

exports.getAlbumById = async (req, res, next) => {
  try {
    if (!isValidId(req.params.albumId)) return res.status(404).json({ message: 'Album not found' });
    const album = await Album.findById(req.params.albumId).populate('artist');
    if (!album) return res.status(404).json({ message: 'Album not found' });
    res.status(200).json(album);
  } catch (err) {
    next(err);
  }
};

exports.deleteSong = async (req, res, next) => {
  try {
    if (!isValidId(req.params.songId)) return res.status(404).json({ message: 'Song not found' });
    const deleted = await Song.findByIdAndDelete(req.params.songId);
    if (!deleted) return res.status(404).json({ message: 'Song not found' });
    res.status(200).json({ message: 'Song deleted' });
  } catch (err) {
    next(err);
  }
};

exports.deleteArtist = async (req, res, next) => {
  try {
    if (!isValidId(req.params.artistId)) return res.status(404).json({ message: 'Artist not found' });
    const deleted = await Artist.findByIdAndDelete(req.params.artistId);
    if (!deleted) return res.status(404).json({ message: 'Artist not found' });
    res.status(200).json({ message: 'Artist deleted' });
  } catch (err) {
    next(err);
  }
};

exports.updateSong = async (req, res, next) => {
  try {
    if (!isValidId(req.params.songId)) return res.status(404).json({ message: 'Song not found' });
    const updated = await Song.findByIdAndUpdate(req.params.songId, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ message: 'Song not found' });
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

exports.updateAlbum = async (req, res, next) => {
  try {
    if (!isValidId(req.params.albumId)) return res.status(404).json({ message: 'Album not found' });
    const updated = await Album.findByIdAndUpdate(req.params.albumId, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ message: 'Album not found' });
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};
