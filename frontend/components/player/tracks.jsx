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

    window.tracks = tracks;

    const sound = new Howl({
      src: [`http://res.cloudinary.com/dsgktnrbx/video/upload/v1500605788/01_Spaceship_Parts_a3jhor.wav`],
    });

    window.sound = sound;
    if (this.props.fetching) {
        return "Fetching...";
    }

    return (
      <div className="main-view-container">
        <div className="tracks">
          <h3>ALL TRACKS</h3>
        <ul className="track-list">
            {tracks.map((track, idx) => <TrackItem key={track.id} track={track} tracks={tracks} enqueuePlayback={this.props.enqueuePlayback} idx={idx}/>)}
        </ul>
      </div>
    </div>
    );
  }
}

export default Tracks;
