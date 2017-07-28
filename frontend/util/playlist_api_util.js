export const createPlaylist = data => (
  $.ajax({
    method: 'POST',
    url: 'api/playlists',
    data
  })
);

export const fetchAllPlaylists = () => (
 $.ajax({
   method: 'GET',
   url: 'api/playlists',
 })
);

export const fetchUserPlaylists = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/playlists/`,
  })
);

export const fetchPlaylist = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/playlists/${id}/`,
  })
);

export const addTrack = (data) => (
  $.ajax({
    method: 'POST',
    url: `api/playlists/${data.playlist_id}/playlistings`,
    data
  })
);

export const followPlaylist = (playlistId) => (
  $.ajax({
    method: 'POST',
    url: `/api/playlists/${playlistId}/follows`,
  })
);
export const unfollowPlaylist = (playlistId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/playlists/${playlistId}/follows/${playlistId}`,
  })
);
