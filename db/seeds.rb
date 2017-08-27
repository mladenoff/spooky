# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

guest = User.create(username: 'squeeze_fan', password: 'password', name: 'Eugene Tunes')
nae = User.create(username: 'nae', password: 'password', name: 'Tiny Mouse')
e20 = User.create(username: 'E-20', password: 'password', name: 'Twenty Water')

Artist.destroy_all

guts = Artist.create(name: 'GUTS')
aertime = Artist.create(name: 'AERTIME')
double_ewes = Artist.create(name: 'Double Ewes')
doorbells = Artist.create(name: 'The Doorbells')
a_small_gang = Artist.create(name: 'A Small Gang of Short and Long Legs')

Album.destroy_all

def_art = 'https://res.cloudinary.com/spooky/image/upload/v1501230042/record_ffljy4.svg'

spaceship_parts_a = Album.create(title: 'Spaceship Parts',
  img_url: 'https://res.cloudinary.com/spooky/image/upload/v1500605880/Spaceship_Parts_tkbpyf.jpg',)

train_tracks_a = Album.create(title: 'train tracks',
  img_url: 'https://res.cloudinary.com/spooky/image/upload/v1500751832/train_tracks_hw45yi.jpg',)
caravilla_a = Album.create(title: 'Caravilla',
  img_url: 'https://res.cloudinary.com/spooky/image/upload/v1500751832/caravilla_udb0dy.jpg',)
ding_dong_a = Album.create(title: 'Ding Dong',
  img_url: 'https://res.cloudinary.com/spooky/image/upload/v1501101701/ding-dong_g0qmza.jpg',)

your_body_is_home_a = Album.create(title: 'Your Body is Home', img_url: def_art)

money_a = Album.create(title: '$$$$', img_url: def_art)

Track.destroy_all

hippzer_t = Track.create(title: 'hippzer',
  artist_id: aertime.id,
  album_id: train_tracks_a.id,
  url: 'https://res.cloudinary.com/spooky/video/upload/v1500751835/hippzer_ujcjkc.mp3',
  sequence: 2)

caravilla_t = Track.create(title: 'Caravilla',
  artist_id: double_ewes.id,
  album_id: caravilla_a.id,
  url: 'https://res.cloudinary.com/spooky/video/upload/v1500751929/caravilla_vyaq88.mp3',
  sequence: 2)

spaceship_parts_t = Track.create(
  title: 'Spaceship Parts',
  artist_id: guts.id,
  album_id: spaceship_parts_a.id,
  url: 'https://res.cloudinary.com/spooky/video/upload/v1500605788/01_Spaceship_Parts_a3jhor.wav',
  sequence: 1)

your_body_is_home_t = Track.create(
  title: 'Your Body is Home',
  artist_id: a_small_gang.id,
  album_id: your_body_is_home_a.id,
  url: 'https://res.cloudinary.com/spooky/video/upload/v1501229489/Your_Body_is_Home_ejnegr.mp3',
  sequence: 1)

Track.create(
  title: 'Lakeside',
  artist_id: aertime.id,
  album_id: money_a.id,
  url: 'https://res.cloudinary.com/spooky/video/upload/v1501229428/01_Lakeside_vvkgry.mp3',
  sequence: 1)

Track.create(
title: "What a Feelin'",
artist_id: aertime.id,
album_id: money_a.id,
url: 'https://res.cloudinary.com/spooky/video/upload/v1501229429/02_What_a_Feelin_qfxp6o.mp3',
sequence: 2)

Track.create(title: 'Falling Asleep in a Chair',
artist_id: aertime.id,
album_id: money_a.id,
url: 'https://res.cloudinary.com/spooky/video/upload/v1501229429/03_Falling_Asleep_in_a_Chair_joixdu.mp3',
sequence: 3)

ding_dong_t = Track.create(title: 'Ding Dong',
artist_id: doorbells.id,
album_id: ding_dong_a.id,
url: 'https://res.cloudinary.com/spooky/video/upload/v1501101699/ding-dong_wq4bog.wav',
sequence: 1)

Playlist.destroy_all

i_love_css = Playlist.create(title: 'JavaScript Jams', user_id: guest.id)
css_tears = Playlist.create(title: 'All the Hits', user_id: guest.id)
mouse_tracks = Playlist.create(title: 'Mouse Tracks', user_id: nae.id)
slaps = Playlist.create(title: 'Bay Area Slappers', user_id: e20.id)

Playlisting.destroy_all

Playlisting.create(playlist_id: i_love_css.id, track_id: caravilla_t.id, ord: 0)
Playlisting.create(playlist_id: i_love_css.id, track_id: hippzer_t.id, ord: 1)

Playlisting.create(playlist_id: css_tears.id, track_id: caravilla_t.id, ord: 0)
Playlisting.create(playlist_id: mouse_tracks.id, track_id: caravilla_t.id, ord: 0)

Follow.destroy_all

Follow.create(playlist_id: css_tears.id, user_id: nae.id)
