json.extract! user, :id, :username

json.follows do
  json.array! user.follows.pluck :playlist_id
end
