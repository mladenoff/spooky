import * as APIUtil from '../util/track_api_util';

const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';

export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks,
});

export const requestAllTracks = () => dispatch => (
  APIUtil.fetchAllTracks().then(tracks => (
    dispatch(receiveTracks(tracks)))
  )
);
