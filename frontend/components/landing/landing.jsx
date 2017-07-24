import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import SessionLinks from './session_links';

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
