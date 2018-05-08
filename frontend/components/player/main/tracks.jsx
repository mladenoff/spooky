import React from 'react';

import TrackItem from './track_item';
import Loading from '../../loading';

class Tracks extends React.Component {
  componentWillMount() {
    this.props.requestAllTracks();
  }

  render() {
    const tracks = Object.values(this.props.tracks.byId);
    if (this.props.fetching === true) {
      return <Loading />;
    }

    return (
      <div className="tracks">
        <h3 className="view-header">ALL TRACKS</h3>
        <ul className="track-list">
          {tracks.map((track, idx) =>
            (<TrackItem
              key={track.id}
              track={track}
              tracks={this.props.tracks.allIds}
              enqueuePlayback={this.props.enqueuePlayback}
              play={this.props.play}
              idx={idx}
            />)
          )}
        </ul>
      </div>
    );
  }
}


export default Tracks;
