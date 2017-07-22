import { ENQUEUE_PLAYBACK } from '../actions/playback_actions';

const defaultState = () => ({
  currentTrack: null,
  playQueue: [],
  volume: 1,
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
      };
    default:
      return state;
  }
};

export default PlaybackReducer;
