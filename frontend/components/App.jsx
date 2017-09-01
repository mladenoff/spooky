import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LandingBG from './landing/landing-bg';
import Player from './player/player';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute path="/player" component={Player} />
      <AuthRoute path="/" component={LandingBG} />
    </Switch>
  </div>
);

export default App;
