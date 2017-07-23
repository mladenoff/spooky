import React from 'react';

class TrackItem extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlayClick = this.handlePlayClick.bind(this);
  }

  handlePlayClick() {
    this.props.enqueuePlayback(this.props.tracks.slice(this.props.idx));
  }

  render() {
    return(<li className="track-item">
      <div className="red-background">
        <img src={this.props.track.img_url} className="album-art" onClick={this.handlePlayClick} />
      </div>
      {this.props.track.artist} • {this.props.track.title}
    </li>);
  }
}



export default TrackItem;
