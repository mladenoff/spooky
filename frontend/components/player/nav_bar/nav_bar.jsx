import React from 'react';

class NavBar extends React.Component {
  render() {
    return(
      <div className="nav-bar-container">
        <nav className="nav-bar">
          <img
            src="http://res.cloudinary.com/dsgktnrbx/image/upload/v1500489690/flashlight_qmeggn.svg"
            className="logo-small"/>
          <h2>{this.props.currentUser.username}, it's music.</h2>
          <div className="main-nav-bar"></div>
          <button className="nav-bar-button" onClick={this.props.logout}>
            Log out
          </button>
        </nav>
      </div>
    );
  }
}

export default NavBar;
