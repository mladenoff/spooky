import { connect } from 'react-redux';

import NavPlaylists from './nav_playlists';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  , //TODO finish up fetching action and get this puppy runnin
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavPlaylists);
