import _ from 'lodash';

import {
  RECEIVE_TRACKS,
  // RECEIVE_TRACK_ERRORS,
} from '../actions/track_actions';
import { RECEIVE_SEARCH } from '../actions/search_actions';
import { PLAY_PLAYLIST } from '../actions/playlist_actions';

const defaultState = () => ({ byId: {}, allIds: [] });

const tracksReducer = (state = defaultState(), action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCH:
      console.log("Receive search!");
    case RECEIVE_TRACKS:
      console.log("Receive tracks!");
      return _.merge({}, state, action.tracks);
    case PLAY_PLAYLIST:
      return _.merge({}, state, {
        byId: action.payload.tracks,
        allIds: action.payload.playlist,
      });
    default:
      return state;
  }
};

export default tracksReducer;
