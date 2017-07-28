import React from 'react';

import AddTrackModal from './playlists/add_track_modal';

class TrackItem extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlayClick = this.handlePlayClick.bind(this);
  }

  handlePlayClick() {
    this.props.enqueuePlayback(this.props.tracks, this.props.idx);
  }

  render() {
    return(<li className="track-item">
      <div className="album-background">
        <img src={this.props.track.img_url} className="album-art"  />
        <div className="album-option play" onClick={this.handlePlayClick}>
          <img src="https://res.cloudinary.com/spooky/image/upload/v1500841381/play_cnlwmc.svg" />
        </div>
        <AddTrackModal trackId={this.props.track.id}/>
      </div>
      <span className="track-item-words overflow">{this.props.track.artist} • {this.props.track.title}</span>
    </li>);
  }
}



export default TrackItem;
