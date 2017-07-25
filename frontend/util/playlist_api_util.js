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

export const fetchUserPlaylists = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}/playlists/`,
  })
);
