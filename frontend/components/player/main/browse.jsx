import React from 'react';
import {Link, withRouter} from 'react-router-dom';

import TracksContainer from './tracks_container';
import BrowseNav from './browse_nav';
import NewPlaylistModal from './playlists/new_playlist_modal';
import PlaylistsContainer from './playlists/playlists_container';
import Loading from '../../loading';

import { ProtectedRoute } from '../../../util/route_util';

const Browse = () => (
  <div className="browse">
    <BrowseNav />
    <ProtectedRoute path="/player/tracks" component={TracksContainer} />
    <ProtectedRoute path="/player/loading" component={Loading} />
    <ProtectedRoute path="/player/playlists" component={PlaylistsContainer} />
  </div>
);

export default Browse;

// <div className="browse-nav-container">
//   <nav className="browse-nav">
//     <ul className="browse-nav-list">
//       <Link to="/player/tracks"><li className="browse-nav-link">Tracks</li></Link>
//       <Link to="/player/loading"><li className="browse-nav-link">Loading</li></Link>
//       <Link to="/player/playlists"><li className="browse-nav-link">Playlists</li></Link>
//     </ul>
//   </nav>
//   <NewPlaylistModal />
// </div>
