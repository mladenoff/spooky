import {
  RECEIVE_TRACKS,
  RECEIVE_TRACK_ERRORS,
} from '../actions/track_actions';

const defaultState = () => ([]);

const TracksReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACKS:
      return action.tracks;
    default:
      return state;
  }
};
