import React from 'react';
import ReactHowler from 'react-howler';

class NavBar extends React.Component {
  render() {
    return(
      <div className="widget-container">
        <div className="widget">
          <ReactHowler />
        </div>
      </div>
    );
  }
}

export default NavBar;
