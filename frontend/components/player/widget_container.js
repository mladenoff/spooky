import { connect } from 'react-redux';

import Widget from './widget';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  currentTrack: state.playback.currentTrack,
  playQueue: state.playback.playQueue,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Widget);
