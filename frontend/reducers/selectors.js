import { values } from 'lodash';

export const selectAllTracks = ({tracks}) => values(tracks);

export const selectAllPlaylists = ({playlists}) => values(playlists);
