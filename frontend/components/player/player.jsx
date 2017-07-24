import React from 'react';

import NavBarContainer from './nav_bar/nav_bar_container';
import WidgetContainer from './widget_container';
import Browse from './main/browse';

const Player = () => (
  <div className="player">
    <NavBarContainer />
    <div className="main-view-container">
      <Browse />
    </div>
    <WidgetContainer />
  </div>
);

export default Player;
