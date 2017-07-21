export const fetchAllTracks = () => (
  $.ajax({
    method: 'GET',
    url: '/api/tracks',
  })
);
