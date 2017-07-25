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
      <div className="nav-playlists">
        <ul>
          {this.props.userPlaylists.map((playlist, idx) =>
            (<NavPlaylistsItem key={playlist.id}
              playlist={playlist}
              playlists={this.props.userPlaylists}
              idx={idx}/>))}
        </ul>
      </div>
    );
  }
}

export default NavPlaylists;
