import React from 'react';

import Loading from '../../loading';

import NavPlaylistsItem from './nav_playlists_item';

class NavPlaylists extends React.Component {
  constructor(props) {
  super(props);
  }

  componentWillMount() {
    this.props.requestUserPlaylists(this.props.currentUser.id);
  }

  render() {
    const { tracks } = this.props;

    if (this.props.fetching === true) {
      return <Loading />;
    }

    return (
      <div className="main-nav-bar">
        <h3 className="nav-header">Your playlists</h3>
      <div className="nav-playlists">
        <ul>
          {this.props.userPlaylists.map((playlist, idx) =>
            (<NavPlaylistsItem key={playlist.id}
              playlist={playlist}
              requestPlaylistPlayback={this.props.requestPlaylistPlayback}
              playlists={this.props.userPlaylists}
              currentPlaylist={this.props.currentPlaylist}
              idx={idx}/>))}
        </ul>
      </div>
      <h3 className="nav-header">Followed playlists</h3>
        <div className="nav-playlists">
          <ul>
            {this.props.userFollows.map((playlist, idx) =>
              (<NavPlaylistsItem key={playlist.id}
                playlist={playlist}
                requestPlaylistPlayback={this.props.requestPlaylistPlayback}
                playlists={this.props.userFollows}
                currentPlaylist={this.props.currentPlaylist}
                idx={idx}/>))}
          </ul>
        </div>
    </div>
    );
  }
}

export default NavPlaylists;
