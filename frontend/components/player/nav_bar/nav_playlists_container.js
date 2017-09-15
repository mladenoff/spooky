import { connect } from 'react-redux';

import NavPlaylists from './nav_playlists';
import {
  requestUserPlaylists,
  requestPlaylistPlayback,
} from '../../../actions/playlist_actions';
import {
  orderUserPlaylists,
  orderUserFollows,
} from '../../../reducers/selectors';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentPlaylist: state.playback.playlist,
  userPlaylists: orderUserPlaylists(
    state.playlists, state.session.currentUser.id
  ),
  userFollows: orderUserFollows(
    state.playlists, state.session.currentUser.follows
  ),
});

const mapDispatchToProps = dispatch => ({
  requestUserPlaylists: id => dispatch(requestUserPlaylists(id)),
  requestPlaylistPlayback: (playlistId, tracks) => (
    dispatch(requestPlaylistPlayback(playlistId, tracks))
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavPlaylists);
