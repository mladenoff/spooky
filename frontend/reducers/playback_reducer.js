import { ENQUEUE_PLAYBACK, PAUSE_PLAYBACK } from '../actions/playback_actions';

const defaultState = () => ({
  currentTrack: null,
  playQueue: [],
  volume: 1,
  playing: false,
});

const PlaybackReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  switch (action.type) {
    case ENQUEUE_PLAYBACK:
      const newQueue = state.playQueue.concat(action.tracks);
      return {
        volume: state.volume,
        playQueue: newQueue,
        currentTrack: state.playQueue.length,
        playing: true,
      };
    case PAUSE_PLAYBACK:
      const newState = Object.assign({}, state, {playing: false});
      return newState;
    default:
      return state;
  }
};

export default PlaybackReducer;
