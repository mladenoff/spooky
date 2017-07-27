import React from 'react';

import TrackItem from '../track_item';
import Loading from '../../../loading';

class Search extends React.Component {
  constructor(props) {
  super(props);
  }

  componentWillMount() {
    this.props.requestAllTracks();
  }

  render() {
    const { tracks } = this.props;
    if (this.props.fetching === true) {
      return <Loading />;
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

export default Search;
