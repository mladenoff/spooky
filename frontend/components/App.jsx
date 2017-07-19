import React from 'react';
import {Route} from 'react-router-dom';

import LandingContainer from './landing/landing_container';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="container">
    <div>
    <div className="logo-container">
      <img src="http://res.cloudinary.com/dsgktnrbx/image/upload/v1500489690/flashlight_qmeggn.svg" className="logo"/>
      <h1>
         Spooky
        </h1>
      </div>
      <br/>
      <LandingContainer />
      <br/>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
</div>
  </div>
);

export default App;
