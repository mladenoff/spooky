import _ from 'lodash';
import { CLEAR_SEARCH, RECEIVE_SEARCH } from '../actions/search_actions';

const defaultState = { uiTracks: [] };

const uiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH:
      return Object.assign({}, state, { uiTracks: action.tracks.allIds });
    case CLEAR_SEARCH:
      return Object.assign({}, state, { uiTracks: [] });
    default:
      return state;
  }
};

export default uiReducer;
