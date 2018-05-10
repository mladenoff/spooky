import React from 'react';
import { Route } from 'react-router-dom';

import LandingMainContainer from './LandingMainContainer';
import SessionFormContainer from '../session_form/session_form_container';
import LandingHeaderContainer from './landing_header_container';
import Footer from './Footer';
import { AuthRoute } from '../../util/route_util';

const Landing = () => (
  <div>
    <div className="landing-bg">
      <LandingHeaderContainer />
      <div className="landing-container">
        <Route exact path="/" component={LandingMainContainer} />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </div>
      <Footer />
    </div>
  </div>
);

export default Landing;
