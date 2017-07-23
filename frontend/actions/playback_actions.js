export const ENQUEUE_PLAYBACK = 'ENQUEUE_PLAYBACK';
export const PAUSE_PLAYBACK = 'PAUSE_PLAYBACK';
export const PLAY = 'PLAY';

export const enqueuePlayback = tracks => ({
  type: ENQUEUE_PLAYBACK,
  tracks,
});

export const pausePlayback = () =>({
  type: PAUSE_PLAYBACK,
});

export const play = () =>({
  type: PLAY,
});
