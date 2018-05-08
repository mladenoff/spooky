import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import playbackReducer from './playback_reducer';
import fetchingReducer from './fetching_reducer';
import uiReducer from './uiReducer';

export default combineReducers({
  ui: uiReducer,
  entities: entitiesReducer,
  playback: playbackReducer,
  session: sessionReducer,
  fetching: fetchingReducer,
});
