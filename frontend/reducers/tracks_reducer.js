import {
  RECEIVE_TRACKS,
  RECEIVE_TRACK_ERRORS,
} from '../actions/track_actions';
import { CLEAR_SEARCH } from '../actions/search_actions';

const defaultState = () => ({});

const tracksReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACKS:
      return action.tracks;
    case CLEAR_SEARCH:
      return {};
    default:
      return state;
  }
};

export default tracksReducer;
