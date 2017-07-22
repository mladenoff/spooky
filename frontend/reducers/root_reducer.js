import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import tracksReducer from './tracks_reducer';
import PlaybackReducer from './playback_reducer';

export default combineReducers({
  session: SessionReducer,
  tracks: tracksReducer,
  playback: PlaybackReducer,
});
