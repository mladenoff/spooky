import * as APIUtil from '../util/playlist_api_util';
import {START_FETCHING} from '../reducers/fetching_reducer';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const START_FETCHING_PLAYLISTS = 'START_FETCHING_PLAYLISTS';
export const PLAY_PLAYLIST = 'PLAY_PLAYLIST';

export const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists,
});

export const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist,
});

export const playPlaylist = tracks => ({
  type: PLAY_PLAYLIST,
  tracks,
});

export const requestAllPlaylists = () => dispatch => {
  dispatch(startFetchingPlaylists());
  return APIUtil.fetchAllPlaylists().then(playlists => (
    dispatch(receivePlaylists(playlists)))
  );
};

export const requestUserPlaylists = (userId) => dispatch => {
  dispatch(startFetchingPlaylists());
  return APIUtil.fetchUserPlaylists(userId).then(playlists => (
    dispatch(receivePlaylists(playlists)))
  );
};

export const requestPlaylist = (id) => dispatch => {
  dispatch(startFetchingPlaylists());
  return APIUtil.fetchPlaylist(id).then(playlist => (
    dispatch(receivePlaylist(playlist)))
  );
};

export const requestPlaylistPlayback = (id) => dispatch => {
  dispatch(startFetchingPlaylists());
  return APIUtil.fetchPlaylist(id).then(playlist => (
    dispatch(playPlaylist(playlist)))
  );
};

export const startFetchingPlaylists = () => ({
  type: START_FETCHING,
});
