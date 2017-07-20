import React from 'react';
import { Link } from 'react-router-dom';

const LandingHeader = (props) => (
  <header className="landing-header">
    <nav className="landing-nav">
      <Link to="/">
      <div className="logo-container">
        <img
          src="http://res.cloudinary.com/dsgktnrbx/image/upload/v1500489690/flashlight_qmeggn.svg"
          className="logo"/>
        <h1>
          Spooky
        </h1>
      </div>
      </Link>
      <ul className="nav-list">
        <li>Lorem</li>
        <li>Ipsum</li>
        <li>Dolor</li>
        <li>|</li>
        <li><Link to="/login">Log in</Link></li>
      </ul>
    </nav>
  </header>
);

export default LandingHeader;
