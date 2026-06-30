const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const songsRoutes = require('./routes/songs');
const artistsRoutes = require('./routes/artists');
const albumsRoutes = require('./routes/albums');
const usersRoutes = require('./routes/users');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/songs', songsRoutes);
app.use('/artists', artistsRoutes);
app.use('/albums', albumsRoutes);
app.use('/users', usersRoutes);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Resource not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
});

module.exports = app;
