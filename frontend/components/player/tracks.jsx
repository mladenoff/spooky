import React from 'react';
import { Howl } from 'howler';

import TrackItem from './track_item';

class Tracks extends React.Component {
  componentDidMount() {
    this.props.requestAllTracks();
  }

  render() {
    const { tracks } = this.props;

    window.tracks = tracks;

    const sound = new Howl({
      src: [`http://res.cloudinary.com/dsgktnrbx/video/upload/v1500605788/01_Spaceship_Parts_a3jhor.wav`],
    });

    window.sound = sound;

    return (
      <div className="main-view-container">
        <div className="tracks">
        <ul className="track-list">
          {tracks.map(track => <TrackItem key={track.id} track={track}/>)}
        </ul>
      </div>
    </div>
    );
  }
}

export default Tracks;
