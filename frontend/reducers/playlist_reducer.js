import {
  RECEIVE_PLAYLISTS,
} from '../actions/playlist_actions';

const defaultState = () => ({});

const playlistReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  console.log("reducer?");
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return action.playlists;
    default:
      return state;
  }
};

export default playlistReducer;
