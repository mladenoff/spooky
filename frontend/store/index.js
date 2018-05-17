import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const { createLogger } = require('redux-logger'); // eslint-disable-line global-require
  middlewares.push(createLogger());
}

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  )
);

export default configureStore;
