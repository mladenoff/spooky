export const createPlaylist = data => (
  $.ajax({
    method: 'POST',
    url: 'api/playlists',
    data
  })
);

export const getAllPlaylists = () => (
 $.ajax({
   method: 'GET',
   url: 'api/playlists',
 })
);

//  export const getUserPlaylists = () => (
//   $.ajax({
//     method: 'GET',
//     url: 'api/playlists',
//   })
// );
