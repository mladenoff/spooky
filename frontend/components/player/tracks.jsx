import React from 'react';

import TrackItem from './track_item';

class Tracks extends React.Component {
  componentDidMount() {
    this.props.requestAllTracks();
  }

  render() {
    const { tracks } = this.props;
    return (
      <div className="main-view-container">
        <div className="tracks">
        <ul>
          {tracks.map(track => <TrackItem key={track.id} track={track}/>)}
        </ul>
      </div>
    </div>
    );
  }
}

export default Tracks;
