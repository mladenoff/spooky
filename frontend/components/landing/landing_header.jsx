import React from 'react';

const LandingHeader = () => (
  <header className="landing-header">
    <nav className="landing-nav">
      <div className="logo-container">
        <img
          src="http://res.cloudinary.com/dsgktnrbx/image/upload/v1500489690/flashlight_qmeggn.svg"
          className="logo"/>
        <h1>
          Spooky
        </h1>
      </div>
      <ul className="nav-list">
        <li>Lorem</li>
        <li>Ipsum</li>
        <li>Dolor</li>
        <li>|</li>
        <li>Sign in</li>
      </ul>
    </nav>
  </header>
);

export default LandingHeader;
