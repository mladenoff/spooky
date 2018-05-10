import _ from 'lodash';

// TODO: Potentially add a `selectTracksByIds` method to filter in various
// places. Remember `_.pick` is what we want for filtering objects.

// export const selectAllTracks = ({ tracks }) => _.values(tracks);
// TODO: potentially remove if no longer in use

export const selectAllPlaylists = playlists => (
  _.orderBy(_.values(playlists), ['updatedAt'], ['desc'])
);

export const orderUserPlaylists = (playlists, currentUserId) => (
  _.filter(
    selectAllPlaylists(playlists),
    { userId: currentUserId })
);

export const orderUserFollows = (playlists, currentUserFollows) => (
  _.filter(
    selectAllPlaylists(playlists),
    playlist => (currentUserFollows.includes(playlist.id)),
  )
);

export const orderPlaylist = playlist => (
  _.orderBy(_.values(playlist), ['ord'], ['desc'])
);
