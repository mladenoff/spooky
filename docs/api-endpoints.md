# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `GET /api/users` - retrieve all users
- `POST /api/users` - create a user
- `PATCH /api/users/:id` - update a user
- `DELETE /api/users/:id` - delete a user

### Session

- `POST /api/session` - create a new session (login)
- `DELETE /api/session` - delete a session (logout)

### Playlists
- `GET /api/playlists` - retrieve the current user's playlists
- `POST /api/playlists` - create a playlist
- `GET /api/playlists/:id` - retrieve a playlist
- `PATCH /api/playlists/:id` - update a playlist
- `DELETE /api/playlists/:id` - delete a playlist

### Albums

- `GET /api/albums` - retrieve an album

### Artists

- `GET /api/artist` - retrieve an artists albums
