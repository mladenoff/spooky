import React from 'react';
import {Route} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LandingBG from './landing/landing-bg';
import Player from './player/player';

const App = () => (
    <div>
      <AuthRoute path="/" component={LandingBG} />
      <ProtectedRoute path="/" component={Player} />
    </div>
);

export default App;
