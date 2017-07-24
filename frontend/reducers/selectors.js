import * as _ from 'lodash';

export const selectAllTracks = ({tracks}) => _.values(tracks);

export const selectAllPlaylists = ({playlists}) => _.values(playlists);

// _.orderBy(_.values(playlists), ['updated_at'], ['desc'])
