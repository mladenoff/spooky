import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return(
      <div className="nav-bar-container">
        <nav className="nav-bar">
          <Link to="/player/tracks" className="logo-small-container">
            <img
              src="http://res.cloudinary.com/dsgktnrbx/image/upload/v1500489690/flashlight_qmeggn.svg"
              className="logo-small"/>
            <span className="small-logo-text">Spooky</span>
          </Link>
          <h2>{this.props.currentUser.username}, it's music.</h2>
          <div className="main-nav-bar">
            <span className="nav-header">Your playlists</span>
          </div>
          <button className="nav-bar-button" onClick={this.props.logout}>
            Log out
          </button>
        </nav>
      </div>
    );
  }
}

export default NavBar;
