import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/player');
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return event => this.setState({
      [field]: event.currentTarget.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({ user });
  }

  navLink() {
    if (this.props.formType === 'login') {
      return (
        <span>
          Don't have an account?
          <Link to="/signup" className="inline-link"> Sign up</Link>
        </span>
      );
    }
    return (
      <span>
        Already have an account?
        <Link to="/login" className="inline-link"> Log in</Link>
      </span>
    );
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>))}
      </ul>
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="session-form">
        <div id="welcome-text">
          <span>
            { this.props.formType === 'login'
              ? 'Log in and get Spooked.'
              : 'Sign up and get Spooked.' }
          </span>
          <br />
          <span id="session-errors">
            {this.renderErrors()}
          </span>
        </div>
        <br />
        <label value="username">
          <input
            type="text"
            value={this.state.username}
            onChange={this.update('username')}
            className="login-input"
            placeholder="USERNAME"
          />
        </label>
        <br />
        <label value="password">
          <input
            type="password"
            value={this.state.password}
            onChange={this.update('password')}
            className="login-input"
            placeholder="PASSWORD"
          />
        </label>
        <br />
        <input type="submit" value="Submit" className="submit" />
        <br />
        <span id="welcome-text-small">{this.navLink()}</span>
      </form>
    );
  }
}

export default withRouter(SessionForm);
