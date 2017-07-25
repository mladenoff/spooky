import {
  RECEIVE_PLAYLISTS,
} from '../actions/playlist_actions';

const defaultState = () => ({});

const playlistReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return Object.assign(newState, state, action.playlists);
    default:
      return state;
  }
};

export default playlistReducer;
