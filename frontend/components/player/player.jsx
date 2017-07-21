import React from 'react';

import TracksContainer from './tracks_container';
import NavBarContainer from './nav_bar_container';

const Player = () => (
  <div className="player">
    <NavBarContainer />
    <TracksContainer />
  </div>
);

export default Player;
