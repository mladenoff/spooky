json.extract! playlist, :id, :title
json.extract! playlist.user, :username
json.user_id playlist.user.id
