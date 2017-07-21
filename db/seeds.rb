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

Album.destroy_all

spaceship_parts_a = Album.create(title: 'Spaceship Parts')

Track.destroy_all

spaceship_parts_t = Track.create(title: 'Spaceship Parts',
                                 artist_id: guts.id,
                                 album_id: spaceship_parts_a.id,
                                 url: 'http://res.cloudinary.com/dsgktnrbx/video/upload/v1500605788/01_Spaceship_Parts_a3jhor.wav',
                                 img_url: 'http://res.cloudinary.com/dsgktnrbx/image/upload/v1500605880/Spaceship_Parts_tkbpyf.jpg')
