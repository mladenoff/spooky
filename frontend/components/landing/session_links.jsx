import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

class SessionLinks extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const guestUser = { user: { username: 'squeeze_fan', password: 'password' } };
    this.props.login(guestUser);
  }

  render() {
    return (
      <div className="testing">
        <h3 className="quote">The music is out there</h3>
        <br />
        <div className="login-button-container">
          <Link to="/signup" className="landing-button">Sign up</Link>
          <button onClick={this.handleClick} className="landing-button-light">
            Demo login
          </button>
        </div>
      </div>);
  }
}

export default withRouter(SessionLinks);
