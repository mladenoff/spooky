import React from 'react';
import ReactHowler from 'react-howler';

class NavBar extends React.Component {
  render() {
    return(
      <div className="widget-container">
        <div className="widget">
          { this.props.currentTrack !== null
            ? <ReactHowler src={this.props.playQueue[this.props.currentTrack].url}/ >
            : "No current track." }
        </div>
      </div>
    );
  }
}

export default NavBar;
