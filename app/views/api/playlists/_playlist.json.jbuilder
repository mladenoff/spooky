json.extract! playlist, :id, :title
json.extract! playlist.user, :username
json.user_id playlist.user.id
json.count playlist.playlistings.length
if playlist.playlistings.length == 0
  json.updated_at Time.now
else
  json.updated_at playlist.playlistings.select(:updated_at).sort.last.updated_at
end
