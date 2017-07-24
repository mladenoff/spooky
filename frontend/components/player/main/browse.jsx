import React from 'react';

import TracksContainer from './tracks_container';
import NewPlaylistModal from './playlists/new_playlist_modal';

import { ProtectedRoute } from '../../../util/route_util';

const Browse = () => (
  <div className="browse">
    <div className="browse-nav-container">
      <nav className="browse-nav">
        <ul className="browse-nav-list">
          <li>Tracks</li>
          <li>Albums</li>
          <li>Playlists</li>
        </ul>
        <NewPlaylistModal />
      </nav>
    </div>
    <ProtectedRoute path="/player/tracks" component={TracksContainer} />
  </div>
);

export default Browse;
