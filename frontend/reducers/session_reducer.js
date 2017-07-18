import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../action/session_actions';

const defaultState = () => ({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // return Object.assign({}, state, {currentUser: action.currentUser,
      //   errors: []});
      return {currentUser: action.currentUser, errors: []};
    case RECEIVE_ERRORS:
      // return state;
      return {currentUser: null, errors: action.errors};
    default:
      return state;
  }
};

export default SessionReducer;
