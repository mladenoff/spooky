import React from 'react';
import {Route} from 'react-router-dom';

import LandingContainer from './landing/landing_container';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <h1>🔦 Spookify</h1>
    <LandingContainer />
    <br/>
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
