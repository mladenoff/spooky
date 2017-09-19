import * as _ from 'lodash';

export const selectAllTracks = ({ tracks }) => _.values(tracks);

export const selectAllPlaylists = playlists => (
  _.orderBy(_.values(playlists), ['updated_at'], ['desc'])
);

export const orderUserPlaylists = (playlists, currentUserId) => (
  _.filter(
    selectAllPlaylists(playlists),
    { user_id: currentUserId })
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
