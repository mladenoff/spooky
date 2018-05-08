json.tracks do
  @playlist.playlistings.each do |playlisting|
    json.set! playlisting.track_id do
      json.extract! playlisting, :ord
      json.extract! playlisting.track, :id, :title, :url
      json.set! :imgUrl, playlisting.track.album.img_url
      json.set! :artist, playlisting.track.artist.name
    end
  end
end

json.playlist @playlist.playlistings.order(:ord).pluck(:track_id)