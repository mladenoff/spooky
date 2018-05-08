import _ from 'lodash';

import {
  RECEIVE_TRACKS,
  // RECEIVE_TRACK_ERRORS,
} from '../actions/track_actions';
import { CLEAR_SEARCH } from '../actions/search_actions';

const defaultState = () => ({ byId: {}, allIds: [] });

const tracksReducer = (state = defaultState(), action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TRACKS:
      console.log(action.tracks.byId);
      return _.merge({}, state, action.tracks);
    case CLEAR_SEARCH:
      return {};
    default:
      return state;
  }
};

export default tracksReducer;
