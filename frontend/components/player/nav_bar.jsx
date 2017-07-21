import React from 'react';

class NavBar extends React.Component {
  render() {
    return(
      <div className="nav-bar">
        <h2>{this.props.currentUser.username}, it's music.</h2>
        <button className="landing-button" onClick={this.props.logout}>
          Log out
        </button>
      </div>
    );
  }
}

export default NavBar;
