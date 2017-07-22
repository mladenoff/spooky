import {
  START_FETCHING_TRACKS,
  RECEIVE_TRACKS, } from '../actions/track_actions';

const defaultState = () => ({
  fetching: false
});

const FetchingReducer = (state = false, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TRACKS:
      return false;
    case START_FETCHING_TRACKS:
      return true;
    default:
      return state;
  }
};

export default FetchingReducer;
