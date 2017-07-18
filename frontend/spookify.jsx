import React from 'react';
import ReactDOM from 'react-dom';
import * as sessionUtils from './util/session_api_util';

window.signup = sessionUtils.signup;
window.login = sessionUtils.login;
window.logout = sessionUtils.logout;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Music, it's me.</h1>, root);
});
