export const ENQUEUE_PLAYBACK = 'ENQUEUE_PLAYBACK';
export const PAUSE = 'PAUSE';
export const PLAY = 'PLAY';
export const PREVIOUS = 'PREVIOUS';
export const SKIP = 'SKIP';

export const enqueuePlayback = (tracks, currentTrack) => ({
  type: ENQUEUE_PLAYBACK,
  tracks,
  currentTrack,
});

export const pausePlayback = () =>({
  type: PAUSE,
});

export const play = () =>({
  type: PLAY,
});

export const prevTrack = () =>({
  type: PREVIOUS,
});

export const skipTrack = () =>({
  type: SKIP,
});
