import {
  RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST,
} from '../actions/playlist_actions';

const defaultState = () => ({});

const playlistReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  let playlist

  switch (action.type) {
    case RECEIVE_PLAYLIST:
      playlist = { [action.id]: action.payload.playlist };
      return Object.assign({}, state, playlist);
    case RECEIVE_PLAYLISTS:
      return Object.assign({}, state, action.payload.playlists);
    default:
      return state;
  }
};

export default playlistReducer;
