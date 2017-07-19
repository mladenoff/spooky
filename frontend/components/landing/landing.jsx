import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <div>
    <h2>"Music, it's me."</h2>
    <br/>
    <div id="loginButtonContainer">
    <Link to="/login" className="landing-button">Sign in</Link>
    <Link to="/signup" className="landing-button">Sign up</Link>
    </div>
  </div>
);

const personalLanding = (currentUser, logout) => (
  <div>
  <h2>{currentUser.username}, it's music.</h2>
  <button className="top-level-button" onClick={logout}>Log out</button>
  </div>
);

const Landing = ({currentUser, logout}) => (
  <div>
  {currentUser ? personalLanding(currentUser, logout) : sessionLinks()}
  </div>
);

export default Landing;
