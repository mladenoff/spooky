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
