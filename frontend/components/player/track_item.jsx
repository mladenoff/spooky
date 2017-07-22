import React from 'react';

class TrackItem extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlayClick = this.handlePlayClick.bind(this);
  }

  handlePlayClick() {
    this.props.enqueuePlayback(this.props.tracks);
  }

  render() {
    return(<li className="track-item">{this.props.track.artist} • {this.props.track.title} <button className="play" onClick={this.handlePlayClick}>Play</button></li>);
  }
}



export default TrackItem;
