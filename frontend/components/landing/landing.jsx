import React from 'react';
import { Link, Route } from 'react-router-dom';

class SessionLinks extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const guestUser = {user: {username: 'squeeze_fan', password: 'password'}};
    this.props.login(guestUser);
  }

  render() {
    return(
    <div>
      <h2 className="quote">"Music, it's me."</h2>
      <br/>
      <div className="login-button-container">
      <Link to="/signup" className="landing-button">Sign up</Link>
      <button onClick={this.handleClick} className="landing-button-light">Demo login</button>
      </div>
    </div>);
  }
}

const personalLanding = (currentUser, logout) => (
  <div>
  <h2>{currentUser.username}, it's music.</h2>
  <button className="landing-button" onClick={logout}>
    Log out
  </button>
  </div>
);

const Landing = ({currentUser, logout, login}) => (
  <div>
  {currentUser ? personalLanding(currentUser, logout) : <SessionLinks login={login}/>}
  </div>
);

export default Landing;
