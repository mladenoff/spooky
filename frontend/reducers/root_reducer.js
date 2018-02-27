import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import playbackReducer from './playback_reducer';
import fetchingReducer from './fetching_reducer';

export default combineReducers({
  entities: entitiesReducer,
  playback: playbackReducer,
  session: sessionReducer,
  fetching: fetchingReducer,
});
