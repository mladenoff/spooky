import { connect } from 'react-redux';

import LandingHeader from './landing_header';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingHeader);
