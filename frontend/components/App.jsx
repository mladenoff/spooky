import React from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Landing from './landing';
import Player from './player/player';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute path="/player" component={Player} />
      <AuthRoute path="/" component={Landing} />
    </Switch>
  </div>
);

export default App;
