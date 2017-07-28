export const fetchSearchResults = search => (
  $.ajax({
    method: 'POST',
    url: '/api/search',
    data: search
  })
);
