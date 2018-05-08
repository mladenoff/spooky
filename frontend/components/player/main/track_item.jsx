import React from 'react';
import PropTypes from 'prop-types';

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
    return (
      <li className="track-item">
        <div className="album-background">
          <img src={this.props.track.imgUrl} className="album-art" alt="Album art" />
          <div className="album-option play" onClick={this.handlePlayClick}>
            <img
              src="https://res.cloudinary.com/spooky/image/upload/v1500841381/play_cnlwmc.svg"
              alt="Album art"
            />
          </div>
          <AddTrackModal trackId={this.props.track.id} />
        </div>
        <span className="track-item-words overflow">
          {this.props.track.artist} • {this.props.track.title}
        </span>
      </li>
    );
  }
}

TrackItem.propTypes = {
  idx: PropTypes.number,
};

export default TrackItem;
