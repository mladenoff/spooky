import * as _ from 'lodash';

export const selectAllTracks = ({tracks}) => _.values(tracks);

export const selectAllPlaylists = (playlists) => (_.values(playlists));

export const orderUserPlaylists = (playlists, currentUserId) => (
  // selectAllPlaylists(playlists)
  _.filter(selectAllPlaylists(playlists), { 'user_id': currentUserId })
);

// _.orderBy(_.values(playlists), ['updated_at'], ['desc'])
