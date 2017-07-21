import React from 'react';

import TrackItem from './track_item';

class Tracks extends React.Component {
  render() {
    return (
      <div className="tracks">
      <ul>
        <TrackItem />
      </ul>
    </div>
    );
  }
}

export default Tracks;
