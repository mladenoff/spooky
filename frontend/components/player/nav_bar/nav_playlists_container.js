import { connect } from 'react-redux';

import NavPlaylists from './nav_playlists';
import { requestUserPlaylists } from '../../../actions/playlist_actions';
import { orderUserPlaylists, selectAllPlaylists } from '../../../reducers/selectors';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  userPlaylists: orderUserPlaylists(state.playlists, state.session.currentUser.id),
});

const mapDispatchToProps = (dispatch) => ({
  requestUserPlaylists: (id) => dispatch(requestUserPlaylists(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavPlaylists);
