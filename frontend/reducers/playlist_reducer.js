import {
  RECEIVE_PLAYLISTS,
} from '../actions/track_actions';

const defaultState = () => ({});

const tracksReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return action.playlists;
    default:
      return state;
  }
};

export default tracksReducer;
