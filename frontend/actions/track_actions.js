import * as APIUtil from '../util/track_api_util';
import { START_FETCHING } from '../reducers/fetching_reducer';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';
export const START_FETCHING_TRACKS = 'START_FETCHING_TRACKS';
export const CLEAR_TRACKS = 'CLEAR_TRACKS';

export const clearTracks = () => ({
  type: CLEAR_TRACKS,
});

export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks,
});

export const requestAllTracks = () => (dispatch) => {
  dispatch(startFetchingTracks());
  return APIUtil.fetchAllTracks().then(tracks => (
    dispatch(receiveTracks(tracks)))
  );
};

export const startFetchingTracks = () => ({
  type: START_FETCHING,
});
