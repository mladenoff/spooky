import { ENQUEUE_PLAYBACK,
  PAUSE,
  PLAY,
  PREVIOUS,
  SKIP } from '../actions/playback_actions';

const defaultState = () => ({
  currentTrack: null,
  playQueue: [],
  volume: 1,
  playing: false,
});

const PlaybackReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case ENQUEUE_PLAYBACK:
      const newQueue = action.tracks;
      return {
        volume: state.volume,
        playQueue: newQueue,
        currentTrack: action.currentTrack,
        playing: true,
      };
    case PAUSE:
      newState = Object.assign({}, state, {playing: false});
      return newState;
    case PLAY:
      newState = Object.assign({}, state, {playing: true});
      return newState;
    case PREVIOUS:
      if (state.currentTrack > 0) {
        newState = {currentTrack: (state.currentTrack - 1)};}
      return Object.assign({}, state, newState);
    case SKIP:
      if (state.currentTrack < state.playQueue.length - 1) {
        newState = {currentTrack: (state.currentTrack + 1)};}
      return Object.assign({}, state, newState);
    default:
      return state;
  }
};

export default PlaybackReducer;
