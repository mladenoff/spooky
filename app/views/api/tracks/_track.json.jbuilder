json.extract! track, :id, :title, :url
json.set! :img_url, track.album.img_url
json.set! :artist, track.artist.name

# http://res.cloudinary.com/spooky/image/upload/v1501230042/record_ffljy4.svg
