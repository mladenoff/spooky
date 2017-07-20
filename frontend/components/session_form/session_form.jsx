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
      this.props.history.push('/');
    }
  }

  update(field) {
    return event => this.setState({
      [field]: event.currentTarget.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return (<span><Link to="/signup" className="inline-link">sign up</Link> instead</span>);
    } else {
      return (<span><Link to="/login" className="inline-link">log in</Link> instead</span>);
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error,i) => (
          <li key={`error-${i}`}>
            {error}
          </li>))}
      </ul>
    );
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to Spooky!
          <br/>
          Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label value="username">
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="USERNAME"
                />
            </label>
            <br/>
            <label value="password">
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                                placeholder="PASSWORD"
                />
            </label>
            <br/>
            <input type="submit" value="Submit" className="submit"/>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
