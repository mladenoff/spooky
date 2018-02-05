import {
  RECEIVE_PLAYLISTS,
} from '../actions/playlist_actions';

const defaultState = () => ({});

const playlistReducer = (state = defaultState(), action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return Object.assign({}, state, action.playlists);
    default:
      return state;
  }
};

export default playlistReducer;
