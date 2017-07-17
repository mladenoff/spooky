# React Component Hierarchy

## App

* SinglePageContainer
  * AllAlbumsContainer
    * AlbumItem
  * ArtistAlbumsContainer
    * AlbumItem (reusable?)
  * AlbumContainer
    * CurrentAlbum (for Art etc.)
    * TrackItem
  * PlaylistContainer
    * PlaylistInfo
    * TrackItem
* AuthContainer
  * AuthForm
* Sidebar
  * Playlists
* NowPlayingContainer
  * CurrentSong
  * AudioControls
    * PlaybackControls
    * VolumeControl
    * TimeBar
* UserContainer
  * CurrentUserInfo

## React Routes

| Path | Component |
|------|-----------|
| '/'   | App       |
| '/signup' | AuthContainer |
| '/signin' | AuthContainer |
| '/artists/:id' | ArtistAlbumsContainer |
| '/albums/:id' | AlbumContainer |
| '/albums' | AllAlbumsContainer |
| '/users/:id/playlist/:id' | PlaylistContainer |
