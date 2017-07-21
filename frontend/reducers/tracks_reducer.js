import {
  RECEIVE_TRACKS,
  RECEIVE_TRACK_ERRORS,
} from '../actions/track_actions';

const defaultState = () => ({});

const tracksReducer = (state = defaultState(), action) => {
  console.log("hits reducer");
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACKS:
      console.log("MOTHERFUCKER");
      return action.tracks;
    default:
      return state;
  }
};

export default tracksReducer;
