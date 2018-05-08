import { connect } from 'react-redux';

import Widget from './widget';
import { logout } from '../../actions/session_actions';
import { pausePlayback,
  play,
  prevTrack,
  skipTrack,
} from '../../actions/playback_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  playback: state.playback,
  currentTrack: state.playback.currentTrack,
  playing: state.playback.playing,
  tracks: state.entities.tracks.byId,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  play: () => dispatch(play()),
  pausePlayback: () => dispatch(pausePlayback()),
  prevTrack: () => dispatch(prevTrack()),
  skipTrack: () => dispatch(skipTrack()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Widget);
