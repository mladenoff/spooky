import React from 'react';

const TrackItem = ({track}) => {
  return(<li className="track-item">{track.artist} | {track.title}</li>);
};

export default TrackItem;
