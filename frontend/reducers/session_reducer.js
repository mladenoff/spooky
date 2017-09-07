import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
  CLEAR_SESSION_ERRORS,
} from '../actions/session_actions';
import { RECEIVE_FOLLOWS } from '../actions/playlist_actions';

const defaultState = () => ({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FOLLOWS:
      return Object.assign({}, state, { currentUser: action.currentUser });
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser, errors: [] };
    case RECEIVE_SESSION_ERRORS:
      return { currentUser: null, errors: action.errors };
    case CLEAR_SESSION_ERRORS:
      return Object.assign({}, state, { errors: [] });
    default:
      return state;
  }
};

export default SessionReducer;
