import React from 'react';
import { Link } from 'react-router-dom';

class LandingHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const guestUser = {
      user: { username: 'squeeze_fan', password: 'password' }
    };
    this.props.login(guestUser);
  }

  render() {
    return (
      <header className="landing-header">

        <nav className="landing-nav">

          <Link to="/">
            <div className="logo-container">
              <img
                src="https://res.cloudinary.com/spooky/image/upload/v1500489690/flashlight_qmeggn.svg"
                className="logo"
                alt="Spooky logo"
              />
              <h1 className="logo-text">
              Spooky
              </h1>
            </div>
          </Link>

          <ul className="nav-list">
            <li className="header-nav-link">
              <a
                href="https://github.com/mladenoff/spooky/blob/master/README.md"
              >
                Info
              </a>
            </li>
            <li className="header-nav-link">
              <a onClick={this.handleClick}>Demo</a>
            </li>
            <li className="header-nav-link">
              <Link to="/signup">Sign up</Link>
            </li>
            <li>|</li>
            <li className="header-nav-link">
              { this.props.currentUser
                ? <Link to="/logout">Log out</Link>
                : <Link to="/login">Log in</Link>
              }
            </li>
          </ul>

        </nav>

      </header>
    );
  }
}

export default LandingHeader;
