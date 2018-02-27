import { combineReducers } from 'redux';

import tracksReducer from './tracks_reducer';
import playlistReducer from './playlist_reducer';

export default combineReducers({
  tracks: tracksReducer,
  playlists: playlistReducer,
});
