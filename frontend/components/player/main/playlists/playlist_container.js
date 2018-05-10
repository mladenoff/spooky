import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Playlist from './playlist';
// import { requestAllTracks } from '../../../actions/track_actions';
// import { enqueuePlayback } from '../../../actions/playback_actions';

// TODO: Determine what's going on with this commented out stuff

const mapStateToProps = state => ({
  playlists: state.entities.playlists,
  fetching: state.fetching,
});

const mapDispatchToProps = dispatch => ({
  // requestAllTracks: () => dispatch(requestAllTracks()),
  // enqueuePlayback: (tracks, currentTrack) => dispatch(enqueuePlayback(tracks, currentTrack)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist));
