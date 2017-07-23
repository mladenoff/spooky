import React from 'react';

import TracksContainer from './tracks_container';

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
        <button className="submit">New Playlist</button>
      </nav>
    </div>
    <ProtectedRoute path="/player/tracks" component={TracksContainer} />
  </div>
);

export default Browse;
