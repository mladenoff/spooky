json.extract! user, :id, :username

json.playlists do
  json.array! user.playlists.pluck :id
end
