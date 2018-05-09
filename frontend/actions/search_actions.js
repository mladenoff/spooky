import * as APIUtil from '../util/search_api_util';

import { START_FETCHING } from '../reducers/fetching_reducer';

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const startFetchingSearchResults = () => ({
  type: START_FETCHING,
});

export const receiveSearch = results => ({ // At this stage search results are always tracks
  type: RECEIVE_SEARCH,
  tracks: results,
});

export const clearSearch = () => ({ // At this stage search results are always tracks
  type: CLEAR_SEARCH,
});

export const requestSearchResults = search => (dispatch) => {
  dispatch(startFetchingSearchResults());
  return APIUtil.fetchSearchResults(search).then(results => (
    dispatch(receiveSearch(results)) // At this stage search results are always tracks
  ));
};
