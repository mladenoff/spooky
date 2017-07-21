import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

import { requestAllTracks } from './actions/track_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  }else{
    store = configureStore();
  }
  const root = document.getElementById('root');
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.requestAllTracks = requestAllTracks;
  ReactDOM.render(<Root store={ store }/>, root);
});
