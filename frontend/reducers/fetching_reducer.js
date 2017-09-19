// import {
//   START_FETCHING_TRACKS,
//   RECEIVE_TRACKS, } from '../actions/track_actions';

export const START_FETCHING = 'START_FETCHING';

const fetchingReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_FETCHING:
      return true;
    default:
      return false;
  }
};

export default fetchingReducer;
