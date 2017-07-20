import React from 'react';
import {Route} from 'react-router-dom';

import LandingContainer from './landing/landing_container';
import SessionFormContainer from './session_form/session_form_container';
import LandingHeaderContainer from './landing/landing_header_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <LandingHeaderContainer />
    <div className="container">
      <br/>
      <br/>
      <div className="landing-panel">
      <Route exact path="/" component={LandingContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      </div>
    </div>
  </div>
);

export default App;
