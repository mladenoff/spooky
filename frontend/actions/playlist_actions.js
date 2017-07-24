import * as APIUtil from '../util/playlist_api_util';
import {START_FETCHING} from '../reducers/fetching_reducer';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const START_FETCHING_PLAYLISTS = 'START_FETCHING_PLAYLISTS';

export const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists,
});

export const requestAllPlaylists = () => dispatch => {
  dispatch(startFetchingPlaylists());
  return APIUtil.fetchAllPlaylists().then(playlists => (
    dispatch(receivePlaylists(playlists)))
  );
};

export const startFetchingPlaylists = () => ({
  type: START_FETCHING,
});
