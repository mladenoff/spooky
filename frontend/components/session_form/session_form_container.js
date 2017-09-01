import { connect } from 'react-redux';

import SessionForm from './session_form';
import { login,
  logout,
  signup,
  clearErrors
} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    clearErrors: () => dispatch(clearErrors()),
    processForm: user => dispatch(processForm(user)),
    formType,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
