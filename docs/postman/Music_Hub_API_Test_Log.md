# Music Hub API Test Log

Run date: Pending final Postman run

Before testing:

```powershell
cd "C:\Users\topaz sajad\Downloads\IT6038_Assessment2\music-hub-api"
npm install
npm run seed
npm start
```

Important evidence note: `scripts/seed.js` creates the four required users with bcrypt-hashed passwords. The optional signup evidence requests may return `400 Email already in use` after seeding; that is acceptable duplicate-user evidence. For clean `201 Created` signup screenshots, clear only the `users` collection if it is safe, run the signup requests, then run `npm run seed` again before MongoDB collection screenshots.

| Date | Postman request name | Route parameters tested | Expected outcome | Actual outcome | Screenshot filename |
| --- | --- | --- | --- | --- | --- |
| Pending | 01 Auth - Login valid user | none | `200 OK`, JWT token returned | Pending screenshot | `B5_01_Login_Success.png` |
| Pending | 02 Auth - Login invalid password | none | `401 Unauthorized`, `Auth failed` | Pending screenshot | `B5_02_Login_Failed.png` |
| Pending | 03 Auth - GET songs with no token | none | `401 Unauthorized`, no-token message | Pending screenshot | `B5_03_No_Token_Failed.png` |
| Pending | 04 Auth - GET songs with invalid token | none | `401 Unauthorized`, invalid-token message | Pending screenshot | `B5_04_Invalid_Token_Failed.png` |
| Pending | 05 Auth - GET songs with valid token | none | `200 OK`, songs returned | Pending screenshot | `B5_05_Valid_Token_Success.png` |
| Pending | 06 GET Multiple - Songs | none | `200 OK`, songs returned | Pending screenshot | `B5_06_GET_Songs.png` |
| Pending | 07 GET Multiple - Artists | none | `200 OK`, artists returned | Pending screenshot | `B5_07_GET_Artists.png` |
| Pending | 08 GET Multiple - Albums | none | `200 OK`, albums returned | Pending screenshot | `B5_08_GET_Albums.png` |
| Pending | 09 GET Specific Valid - Song by ID | `songId` from `GET /songs` | `200 OK`, one song returned | Pending screenshot | `B5_09_GET_Song_Valid_ID.png` |
| Pending | 12 GET Specific Invalid - Song invalid ID | `invalidid123` | `404 Not Found`, `Song not found` | Pending screenshot | `B5_10_GET_Song_Invalid_ID.png` |
| Pending | 10 GET Specific Valid - Artist by ID | `artistId` from `GET /artists` | `200 OK`, one artist returned | Pending screenshot | `B5_11_GET_Artist_Valid_ID.png` |
| Pending | 13 GET Specific Invalid - Artist invalid ID | `invalidid123` | `404 Not Found`, `Artist not found` | Pending screenshot | `B5_12_GET_Artist_Invalid_ID.png` |
| Pending | 11 GET Specific Valid - Album by ID | `albumId` from `GET /albums` | `200 OK`, one album returned | Pending screenshot | `B5_13_GET_Album_Valid_ID.png` |
| Pending | 14 GET Specific Invalid - Album invalid ID | `invalidid123` | `404 Not Found`, `Album not found` | Pending screenshot | `B5_14_GET_Album_Invalid_ID.png` |
| Pending | 15 PATCH Valid - Song by ID | `songId` from `GET /songs` | `200 OK`, song updated | Pending screenshot | `B5_15_PATCH_Song_Valid_ID.png` |
| Pending | 17 PATCH Invalid - Song invalid ID | `invalidid123` | `404 Not Found`, `Song not found` | Pending screenshot | `B5_16_PATCH_Song_Invalid_ID.png` |
| Pending | 16 PATCH Valid - Album by ID | `albumId` from `GET /albums` | `200 OK`, album updated | Pending screenshot | `B5_17_PATCH_Album_Valid_ID.png` |
| Pending | 18 PATCH Invalid - Album invalid ID | `invalidid123` | `404 Not Found`, `Album not found` | Pending screenshot | `B5_18_PATCH_Album_Invalid_ID.png` |
| Pending | 21 DELETE Valid - Song by ID | `songId` from `GET /songs` | `200 OK`, `Song deleted` | Pending screenshot | `B5_19_DELETE_Song_Valid_ID.png` |
| Pending | 19 DELETE Invalid - Song invalid ID | `invalidid123` | `404 Not Found`, `Song not found` | Pending screenshot | `B5_20_DELETE_Song_Invalid_ID.png` |
| Pending | 22 DELETE Valid - Artist by ID | `artistId` from `GET /artists` | `200 OK`, `Artist deleted` | Pending screenshot | `B5_21_DELETE_Artist_Valid_ID.png` |
| Pending | 20 DELETE Invalid - Artist invalid ID | `invalidid123` | `404 Not Found`, `Artist not found` | Pending screenshot | `B5_22_DELETE_Artist_Invalid_ID.png` |
| Pending | Postman Collection Runner | all required requests | Collection runner shows tests passing | Pending screenshot | `B5_23_Postman_Collection_Runner.png` |

Optional signup evidence requests in the `Authentication` folder:

| Postman request name | Expected evidence result |
| --- | --- |
| 00 Signup Evidence - SamuelSmith@test.com | `201 Created` if user is new, or `400 Email already in use` after seed |
| 00 Signup Evidence - StefaniGermanotta@test.com | `201 Created` if user is new, or `400 Email already in use` after seed |
| 00 Signup Evidence - AdeleAdkins@test.com | `201 Created` if user is new, or `400 Email already in use` after seed |
| 00 Signup Evidence - JelenaHadid@test.com | `201 Created` if user is new, or `400 Email already in use` after seed |

After destructive DELETE tests, run `npm run seed` again before collecting MongoDB screenshots.
