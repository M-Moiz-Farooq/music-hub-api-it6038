# Music Hub API

Music Hub API is a Node.js, Express, MongoDB, and JWT-authenticated REST API for IT6038 Web Services and API Development.

The API provides secure access to music catalogue data for songs, artists, and albums. Registered users can log in and use a JWT to retrieve, update, and delete selected records.

## Setup

Copy `.env.example` to `.env` if a local environment file is needed.

Install dependencies:

```bash
npm install
```

Seed the database:

```bash
npm run seed
```

Start the API:

```bash
npm start
```

The API runs on:

```text
http://localhost:3000
```

Author: Moiz Farooq

Repository updated for Zapier automation testing.
