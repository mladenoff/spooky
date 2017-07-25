import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
import {requestUserPlaylists} from './actions/playlist_actions';

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
  window.requestUserPlaylists = requestUserPlaylists;
  ReactDOM.render(<Root store={ store }/>, root);
});
