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
    if (this.props.loading === true) {
      return <div>Loading</div>;
    }
    return (
      <div className="tracks">
        <h3 className="view-header">ALL TRACKS</h3>
        <ul className="track-list">
            {tracks.map((track, idx) =>
              (<TrackItem key={track.id}
                track={track}
                tracks={tracks}
                enqueuePlayback={this.props.enqueuePlayback}
                idx={idx}/>))}
        </ul>
      </div>
    );
  }
}

export default Tracks;
