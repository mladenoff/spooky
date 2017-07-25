import React from 'react';

class PlaylistsItem extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlayClick = this.handlePlayClick.bind(this);
  }

  handlePlayClick() {
    this.props.enqueuePlayback(this.props.tracks, this.props.idx);
  }

  render() {
    return(
      <li className="playlists-item">
          <div>{this.props.idx + 1}</div>
          <div className="playlists-item-sub info">{this.props.playlist.title} • {this.props.playlist.username}</div> • <img src="http://res.cloudinary.com/spooky/image/upload/v1500841381/play_cnlwmc.svg" className="playlist-button"/>
      </li>
    );
  }
}



export default PlaylistsItem;
