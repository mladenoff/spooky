import React from 'react';
import {Link, withRouter} from 'react-router-dom';

import TracksContainer from './tracks_container';
import PlaylistsContainer from './playlists/playlists_container';
import SearchContainer from './search/search_container';
import BrowseNav from './browse_nav';
import Loading from '../../loading';

import { ProtectedRoute } from '../../../util/route_util';

const Browse = () => (
  <div className="trapper">
  <BrowseNav />
  <div className="browse">
    <ProtectedRoute path="/player/tracks" component={TracksContainer} />
    <ProtectedRoute path="/player/loading" component={Loading} />
    <ProtectedRoute path="/player/playlists" component={PlaylistsContainer} />
    <ProtectedRoute path="/player/search" component={SearchContainer} />
  </div>
  </div>
);

export default Browse;
//import PlaylistContainer from './playlists/playlist_container';
// <ProtectedRoute path=`/player/playlist/:id` component={PlaylistsContainer} /> TODO: add ME IN
