import { RECEIVE_PLAYBACK } from 'playback_actions';

const defaultState = () => ({
  currentTrack: null,
  playQueue: [],
  volume: 1,
});

const PlaybackReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  switch (action.type) {
    default:
      return state;
  }
};

export default PlaybackReducer;
