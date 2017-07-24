import React from 'react';

class PlaylistItem extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlayClick = this.handlePlayClick.bind(this);
  }

  handlePlayClick() {
    this.props.enqueuePlayback(this.props.tracks, this.props.idx);
  }

  render() {
    return(<li className="track-item">
      {this.props.playlist.title} • {this.props.playlist.username}
    </li>);
  }
}



export default PlaylistItem;
