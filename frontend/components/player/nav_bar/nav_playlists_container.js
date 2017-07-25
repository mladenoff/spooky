import { connect } from 'react-redux';

import NavPlaylists from './nav_playlists';
import { requestUserPlaylists } from '../../../actions/playlist_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  requestUserPlaylists: (id) => dispatch(requestUserPlaylists(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavPlaylists);
