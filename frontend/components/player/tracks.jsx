import React from 'react';
import { Howl } from 'howler';

import TrackItem from './track_item';

class Tracks extends React.Component {
  constructor(props) {
  super(props);
  }

  componentWillMount() {
    this.props.requestAllTracks();
  }

  render() {
    const { tracks } = this.props;

    return (
      <div className="main-view-container">
        <div className="tracks">
          <h3 className="view-header">ALL TRACKS</h3>
        <ul className="track-list">
            {tracks.map((track, idx) => <TrackItem key={track.id} track={track} tracks={tracks} enqueuePlayback={this.props.enqueuePlayback} idx={idx}/>)}
        </ul>
      </div>
    </div>
    );
  }
}

export default Tracks;
