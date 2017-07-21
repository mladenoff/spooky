import React from 'react';
import {Route} from 'react-router-dom';

import LandingContainer from './landing_container';
import SessionFormContainer from '../session_form/session_form_container';
import LandingHeaderContainer from './landing_header_container';
import Footer from '../footer/footer';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

const LandingBG = () => (
  <div>
    <div className="landing-bg">
    <LandingHeaderContainer />
    <div className="landing-container">
      <Route exact path="/" component={LandingContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </div>
    <Footer />
    </div>
  </div>
);

export default LandingBG;
