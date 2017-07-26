import { connect } from 'react-redux';

import NavPlaylists from './nav_playlists';
import { requestUserPlaylists, requestPlaylistPlayback } from '../../../actions/playlist_actions';
import { orderUserPlaylists, selectAllPlaylists } from '../../../reducers/selectors';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  userPlaylists: orderUserPlaylists(state.playlists, state.session.currentUser.id),
});

const mapDispatchToProps = (dispatch) => ({
  requestUserPlaylists: (id) => dispatch(requestUserPlaylists(id)),
  requestPlaylistPlayback: (playlist_id, tracks) => dispatch(requestPlaylistPlayback(playlist_id, tracks))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavPlaylists);
