json.playlists do
  @playlists.each do |playlist|
    json.set! playlist.id do
      json.partial! 'api/playlists/playlist', playlist: playlist
    end
  end
end

json.tracks do
  Track.joins(:playlists).includes(:artist, :album).distinct.each do |track|
    json.set! track.id do
      json.partial! 'api/tracks/track', track: track
    end
  end
end
