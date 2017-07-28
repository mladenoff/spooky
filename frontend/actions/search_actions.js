import * as APIUtil from '../util/search_api_util';
import {START_FETCHING} from '../reducers/fetching_reducer';
import {RECEIVE_TRACKS} from './track_actions';
//
// export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export const receiveSearch = results => ({ //At this stage search results are always tracks
  type: RECEIVE_TRACKS,
  tracks: results,
});

export const requestSearchResults = (search) => dispatch => {
  dispatch(startFetchingSearchResults());
  return APIUtil.fetchSearchResults(search).then(results => ( //At this stage search results are always tracks
    dispatch(receiveSearch(results)))
  );
};

export const startFetchingSearchResults = () => ({
  type: START_FETCHING,
});
