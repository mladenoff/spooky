json.extract! playlist, :id, :title
json.extract! playlist.user, :username
json.user_id playlist.user.id
json.updated_at playlist.playlistings.select(:updated_at).sort.last.updated_at
