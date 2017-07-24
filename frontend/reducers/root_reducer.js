import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import tracksReducer from './tracks_reducer';
import PlaybackReducer from './playback_reducer';
import FetchingReducer from './fetching_reducer';
import PlaylistReducer from './playlist_reducer';

export default combineReducers({
  session: SessionReducer,
  tracks: tracksReducer,
  playback: PlaybackReducer,
  fetching: FetchingReducer,
  playlist: PlaylistReducer,
});
