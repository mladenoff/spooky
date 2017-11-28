export const fetchSearchResults = search => (
  $.ajax({
    method: 'POST',
    url: '/api/tracks/search',
    data: search,
  })
);
