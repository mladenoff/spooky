import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <div>
    <h2>"Music, it's me."</h2>
    <Link to="/login">Sign in</Link>&nbsp;|&nbsp;
    <Link to="/signup">Sign up</Link>
  </div>
);

const personalLanding = (currentUser, logout) => (
  <div>
  <h2>{currentUser.username}, it's music.</h2>
  <button className="top-level-button" onClick={logout}>Log out</button>
  </div>
);

const Landing = ({currentUser, logout}) => (
  currentUser ? personalLanding(currentUser, logout) : sessionLinks()
);

export default Landing;
