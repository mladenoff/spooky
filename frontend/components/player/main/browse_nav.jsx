import React from 'react';
import {Link, withRouter} from 'react-router-dom';

import NewPlaylistModal from './playlists/new_playlist_modal';

class BrowseNav extends React.Component {
  constructor(props) {
  super(props);
  }

  render() {
    return (
      <div className="browse-nav-container">
      <nav className="browse-nav">
        <ul className="browse-nav-list">
          <Link to="/player/tracks"><li className="browse-nav-link">Tracks</li></Link>
          <Link to="/player/playlists"><li className="browse-nav-link">Playlists</li></Link>
        </ul>
      </nav>
      <NewPlaylistModal />
    </div>);
  }
}

export default withRouter(BrowseNav);

//TODO: add highlights for page headings
          // <Link to="/player/loading"><li className="browse-nav-link">Loading</li></Link>
