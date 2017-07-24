@playlistings.each do |playlisting|
  json.set! playlistingtrack.id do
    json.partial! 'api/tracks/track', track: track
  end
end
