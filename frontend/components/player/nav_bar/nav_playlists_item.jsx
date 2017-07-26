import React from 'react';

class NavPlaylistsItem extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlayClick = this.handlePlayClick.bind(this);
  }

  handlePlayClick() {
    this.props.enqueuePlayback(this.props.tracks, this.props.idx);
  }

  render() {
    return(
      <li className="nav-playlists-item">
        <div className="nav-playlists-item info">
          {this.props.playlist.title}
        </div>
        <img
          src="http://res.cloudinary.com/spooky/image/upload/v1500841381/play_cnlwmc.svg"
          className="playlist-button"/>
      </li>
    );
  }
}



export default NavPlaylistsItem;
