import * as APIUtil from '../util/playlist_api_util';
import { START_FETCHING } from '../reducers/fetching_reducer';
import { orderPlaylist } from '../reducers/selectors';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const START_FETCHING_PLAYLISTS = 'START_FETCHING_PLAYLISTS';
export const PLAY_PLAYLIST = 'PLAY_PLAYLIST';
export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';

export const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists,
});

export const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist,
});

export const playPlaylist = (tracks, id) => ({
  type: PLAY_PLAYLIST,
  tracks: orderPlaylist(tracks),
  playlist: id
});

export const receiveUserFollows = currentUser => ({
  type: RECEIVE_FOLLOWS,
  currentUser
});

export const requestAllPlaylists = () => (dispatch) => {
  dispatch(startFetchingPlaylists());
  return APIUtil.fetchAllPlaylists().then(playlists => (
    dispatch(receivePlaylists(playlists)))
  );
};

export const requestUserPlaylists = userId => (dispatch) => {
  dispatch(startFetchingPlaylists());
  return APIUtil.fetchUserPlaylists(userId).then(playlists => (
    dispatch(receivePlaylists(playlists)))
  );
};

export const requestPlaylist = id => (dispatch) => {
  dispatch(startFetchingPlaylists());
  return APIUtil.fetchPlaylist(id).then(playlist => (
    dispatch(receivePlaylist(playlist)))
  );
};

export const requestPlaylistPlayback = id => (dispatch) => {
  dispatch(startFetchingPlaylists());
  return APIUtil.fetchPlaylist(id).then(playlist => (
    dispatch(playPlaylist(playlist, id)))
  );
};

export const createPlaylist = data => dispatch => (
  APIUtil.createPlaylist(data).then(playlists => (
    dispatch(receivePlaylists(playlists)))
  )
);

export const addTrack = data => dispatch => (
  APIUtil.addTrack(data).then(playlists => (
    dispatch(receivePlaylists(playlists)))
  )
);

export const followPlaylist = playlistId => dispatch => (
  APIUtil.followPlaylist(playlistId).then(user => (
    dispatch(receiveUserFollows(user)))
  )
);
export const unfollowPlaylist = playlistId => dispatch => (
  APIUtil.unfollowPlaylist(playlistId).then(user => (
    dispatch(receiveUserFollows(user)))
  )
);

export const startFetchingPlaylists = () => ({
  type: START_FETCHING,
});
