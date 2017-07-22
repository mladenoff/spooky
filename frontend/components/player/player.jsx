import React from 'react';
import { Howl } from 'howler';

import TracksContainer from './tracks_container';
import NavBarContainer from './nav_bar_container';
import WidgetContainer from './widget_container';

const Player = () => (
  <div className="player">
    <NavBarContainer />
    <TracksContainer />
    <WidgetContainer />
  </div>
);

export default Player;
