require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Artist = require('../api/models/artist');
const Album = require('../api/models/album');
const Song = require('../api/models/song');
const User = require('../api/models/user');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/musicHubDB';

async function seed() {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB for seeding');

    // Clear collections
    await Artist.deleteMany({});
    await Album.deleteMany({});
    await Song.deleteMany({});
    await User.deleteMany({});

    // Create artists
    const artists = await Artist.insertMany([
      { name: 'Samuel Smith', country: 'UK', genre: 'Pop', activeSince: 2010 },
      { name: 'Stefani Germanotta', country: 'US', genre: 'Pop', activeSince: 2005 },
      { name: 'Adele Adkins', country: 'UK', genre: 'Soul', activeSince: 2006 },
      { name: 'Jelena Hadid', country: 'US', genre: 'Pop', activeSince: 2012 },
      { name: 'Local Artist', country: 'NZ', genre: 'Indie', activeSince: 2018 }
    ]);

    // Create albums
    const albums = await Album.insertMany([
      { title: 'Album One', releaseYear: 2015, artist: artists[0]._id, genre: 'Pop' },
      { title: 'Album Two', releaseYear: 2018, artist: artists[1]._id, genre: 'Pop' },
      { title: 'Album Three', releaseYear: 2020, artist: artists[2]._id, genre: 'Soul' },
      { title: 'Album Four', releaseYear: 2021, artist: artists[3]._id, genre: 'Pop' },
      { title: 'Indie LP', releaseYear: 2019, artist: artists[4]._id, genre: 'Indie' }
    ]);

    // Create songs
    await Song.insertMany([
      { title: 'Song A', genre: 'Pop', duration: 210, releaseYear: 2015, artist: artists[0]._id, album: albums[0]._id },
      { title: 'Song B', genre: 'Pop', duration: 190, releaseYear: 2018, artist: artists[1]._id, album: albums[1]._id },
      { title: 'Song C', genre: 'Soul', duration: 240, releaseYear: 2020, artist: artists[2]._id, album: albums[2]._id },
      { title: 'Song D', genre: 'Pop', duration: 200, releaseYear: 2021, artist: artists[3]._id, album: albums[3]._id },
      { title: 'Song E', genre: 'Indie', duration: 230, releaseYear: 2019, artist: artists[4]._id, album: albums[4]._id }
    ]);

    // Create users required by the assignment
    const users = [
      { email: 'SamuelSmith@test.com', password: 'Sam@12345' },
      { email: 'StefaniGermanotta@test.com', password: 'Gaga@12345' },
      { email: 'AdeleAdkins@test.com', password: 'Adele@12345' },
      { email: 'JelenaHadid@test.com', password: 'Jelena@12345' }
    ];

    for (const u of users) {
      const hashed = await bcrypt.hash(u.password, 10);
      await new User({ email: u.email, password: hashed }).save();
    }

    console.log('Seeding complete');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error', err);
    process.exit(1);
  }
}

seed();
