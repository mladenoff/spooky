import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import tracksReducer from './tracks_reducer';
import playbackReducer from './playback_reducer';
import fetchingReducer from './fetching_reducer';
import playlistReducer from './playlist_reducer';

export default combineReducers({
  session: sessionReducer,
  tracks: tracksReducer,
  playback: playbackReducer,
  fetching: fetchingReducer,
  playlists: playlistReducer,
});
