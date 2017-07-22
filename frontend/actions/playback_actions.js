export const ENQUEUE_PLAYBACK = 'ENQUEUE_PLAYBACK';

export const enqueuePlayback = tracks => ({
  type: ENQUEUE_PLAYBACK,
  tracks,
});
