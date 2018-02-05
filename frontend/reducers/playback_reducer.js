import { ENQUEUE_PLAYBACK,
  PAUSE,
  PLAY,
  PREVIOUS,
  SKIP,
} from '../actions/playback_actions';
import { PLAY_PLAYLIST } from '../actions/playlist_actions';

const defaultState = () => ({
  currentTrack: null,
  playQueue: [],
  volume: 1,
  playing: false,
  playlist: null,
});

const playbackReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case ENQUEUE_PLAYBACK:
      return {
        volume: state.volume,
        playQueue: action.tracks,
        currentTrack: action.currentTrack,
        playing: true,
        playlist: null,
      };
    case PLAY_PLAYLIST:
      return Object.assign({}, state, {
        playQueue: action.tracks,
        currentTrack: 0,
        playing: true,
        playlist: action.playlist,
      });
    case PAUSE:
      newState = Object.assign({}, state, { playing: false });
      return newState;
    case PLAY:
      newState = Object.assign({}, state, { playing: true });
      return newState;
    case PREVIOUS:
      if (state.currentTrack > 0) {
        newState = { currentTrack: (state.currentTrack - 1) };
      }
      return Object.assign({}, state, newState);
    case SKIP:
      if (state.currentTrack < state.playQueue.length - 1) {
        newState = { currentTrack: (state.currentTrack + 1) };
      }
      return Object.assign({}, state, newState);
    default:
      return state;
  }
};

export default playbackReducer;
