# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

guest = User.create(username: 'squeeze_fan', password: 'password', name: 'Eugene Tooms')
naomi = User.create(username: 'nae', password: 'password', name: 'Tiny Mouse')

Artist.destroy_all

guts = Artist.create(name: 'GUTS')
aertime = Artist.create(name: 'AERTIME')
double_ewes = Artist.create(name: 'Double Ewes')

Album.destroy_all

spaceship_parts_a = Album.create(title: 'Spaceship Parts',
  img_url: 'http://res.cloudinary.com/spooky/image/upload/v1500605880/Spaceship_Parts_tkbpyf.jpg',)

train_tracks_a = Album.create(title: 'train tracks',
  img_url: 'http://res.cloudinary.com/spooky/image/upload/v1500751832/train_tracks_hw45yi.jpg',)
caravilla_a = Album.create(title: 'Caravilla',
  img_url: 'http://res.cloudinary.com/spooky/image/upload/v1500751832/caravilla_udb0dy.jpg',)

Track.destroy_all

hippzer_t = Track.create(title: 'hippzer',
  artist_id: aertime.id,
  album_id: train_tracks_a.id,
  url: 'http://res.cloudinary.com/spooky/video/upload/v1500751835/hippzer_ujcjkc.mp3',
  sequence: 2)

caravilla_t = Track.create(title: 'Caravilla',
  artist_id: double_ewes.id,
  album_id: caravilla_a.id,
  url: 'http://res.cloudinary.com/spooky/video/upload/v1500751929/caravilla_vyaq88.mp3',
  sequence: 2)

spaceship_parts_t = Track.create(title: 'Spaceship Parts',
  artist_id: guts.id,
  album_id: spaceship_parts_a.id,
  url: 'http://res.cloudinary.com/spooky/video/upload/v1500605788/01_Spaceship_Parts_a3jhor.wav',
  sequence: 1)

Playlist.destroy_all

i_love_css = Playlist.create(title: 'I love CSS!!', user_id: guest.id)
css_tears = Playlist.create(title: 'CSS Tears', user_id: guest.id)

Playlisting.destroy_all

Playlisting.create(playlist_id: i_love_css.id, track_id: caravilla_t.id, ord: 1)
Playlisting.create(playlist_id: i_love_css.id, track_id: hippzer_t.id, ord: 2)

Playlisting.create(playlist_id: css_tears.id, track_id: caravilla_t.id, ord: 1)
