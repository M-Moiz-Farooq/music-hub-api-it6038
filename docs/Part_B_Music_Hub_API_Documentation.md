# Part B: Music Hub API Documentation

Student: Moiz Farooq

Student ID: 20240779

Course: IT6038 Web Services and API Development

## API Planning

Music Hub API is a secure REST API for music catalogue information. It provides authenticated access to songs, artists, and albums stored in MongoDB.

The API is designed for music application developers, frontend applications, registered users, administrators, and music content managers. It supports retrieving multiple records, retrieving specific records by ID, updating selected records, and deleting selected records.

## Selected Music Hub Endpoints

| Number | Method | Endpoint | Purpose | JWT required |
| --- | --- | --- | --- | --- |
| 1 | GET | `/songs` | Retrieve all songs | Yes |
| 2 | GET | `/artists` | Retrieve all artists | Yes |
| 3 | GET | `/albums` | Retrieve all albums | Yes |
| 4 | GET | `/songs/:songId` | Retrieve one song by ID | Yes |
| 5 | GET | `/artists/:artistId` | Retrieve one artist by ID | Yes |
| 6 | GET | `/albums/:albumId` | Retrieve one album by ID | Yes |
| 7 | DELETE | `/songs/:songId` | Delete one song by ID | Yes |
| 8 | DELETE | `/artists/:artistId` | Delete one artist by ID | Yes |
| 9 | PATCH | `/songs/:songId` | Update one song by ID | Yes |
| 10 | PATCH | `/albums/:albumId` | Update one album by ID | Yes |

## API Design

The RAML design is stored at:

`raml/music-hub-api.raml`

The RAML file defines the API title, version, base URI, media type, JWT security scheme, authentication routes, Music Hub resource routes, request examples, response examples, and error responses.

## Implementation

The API is implemented with Node.js, Express, MongoDB, Mongoose, bcryptjs, jsonwebtoken, cors, morgan, and dotenv.

Important source files:

| File | Purpose |
| --- | --- |
| `app.js` | Configures Express middleware and route mounting |
| `server.js` | Connects to MongoDB and starts the API server |
| `api/models/song.js` | Defines the Song model |
| `api/models/artist.js` | Defines the Artist model |
| `api/models/album.js` | Defines the Album model |
| `api/models/user.js` | Defines the User model |
| `controllers/musicController.js` | Contains the 10 Music Hub controller functions |
| `controllers/userController.js` | Contains signup and login functions |
| `middleware/check-auth.js` | Verifies JWT bearer tokens |
| `scripts/seed.js` | Seeds songs, artists, albums, and required users |

## Controller Functions

`controllers/musicController.js` contains exactly 10 Music Hub controller functions:

1. `getAllSongs`
2. `getSongById`
3. `getAllArtists`
4. `getArtistById`
5. `getAllAlbums`
6. `getAlbumById`
7. `deleteSong`
8. `deleteArtist`
9. `updateSong`
10. `updateAlbum`

`controllers/userController.js` contains:

1. `signup`
2. `login`

## Database

The MongoDB database is:

`musicHubDB`

Required collections:

- `songs`
- `artists`
- `albums`
- `users`

The seed script creates the required users with bcrypt-hashed passwords:

| Email | Test password |
| --- | --- |
| `SamuelSmith@test.com` | `Sam@12345` |
| `StefaniGermanotta@test.com` | `Gaga@12345` |
| `AdeleAdkins@test.com` | `Adele@12345` |
| `JelenaHadid@test.com` | `Jelena@12345` |

## Authentication

Signup and login are intentionally public:

- `POST /users/signup`
- `POST /users/login`

All 10 Music Hub data endpoints are protected with JWT authentication. Protected requests must include:

```text
Authorization: Bearer <token>
```

## Testing Evidence

The Postman collection is stored at:

`docs/postman/Music_Hub_API_Postman_Collection.json`

The test log is stored at:

`docs/postman/Music_Hub_API_Test_Log.md`

The collection includes authentication tests, successful protected endpoint tests, valid ID tests, invalid ID tests, PATCH tests, DELETE tests, and optional signup evidence requests for the four required users.

## Run Commands

Install dependencies:

```powershell
npm install
```

Seed the database:

```powershell
npm run seed
```

Start the API:

```powershell
npm start
```
