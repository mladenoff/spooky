json.extract! track, :id, :title, :url
json.set! :img_url, track.album.img_url
json.set! :artist, track.artist.name
