import React from 'react';
import { Link } from 'react-router-dom';

const LandingHeader = (props) => (
  <header className="landing-header">

    <nav className="landing-nav">

      <Link to="/">
      <div className="logo-container">
        <img
          src="http://res.cloudinary.com/spooky/image/upload/v1500489690/flashlight_qmeggn.svg"
          className="logo"/>
        <h1 className="logo-text">
          Spooky
        </h1>
      </div>
      </Link>

      <ul className="nav-list">
        <li className="header-nav-link">These</li>
        <li className="header-nav-link">Aren't</li>
        <li className="header-nav-link">Links</li>
        <li>|</li>
        <li className="header-nav-link">
          { props.currentUser ? <Link to="/logout">Log out</Link> : <Link to="/login">Log in</Link> }
        </li>
      </ul>

    </nav>

  </header>
);

export default LandingHeader;
