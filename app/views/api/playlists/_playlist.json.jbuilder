json.extract! playlist, :id, :title
json.extract! playlist.user, :username
json.user_id playlist.user.id

json.count playlist.playlistings.length

if playlist.playlistings.empty?
  json.updatedAt Time.now.to_i
else
  json.updatedAt(
    playlist.playlistings.sort_by(&:updated_at).last.updated_at.to_i
  )
end

json.list playlist.playlistings.sort_by(&:ord).pluck(:track_id)