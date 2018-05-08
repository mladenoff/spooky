import { connect } from 'react-redux';

import Tracks from './tracks';
import { requestAllTracks } from '../../../actions/track_actions';
import { enqueuePlayback, play } from '../../../actions/playback_actions';
import { selectAllTracks } from '../../../reducers/selectors';

const mapStateToProps = state => ({
  tracks: state.entities.tracks,
  fetching: state.fetching,
});

const mapDispatchToProps = dispatch => ({
  requestAllTracks: () => dispatch(requestAllTracks()),
  play: () => dispatch(play()),
  enqueuePlayback: (tracks, currentTrack) =>
    dispatch(enqueuePlayback(tracks, currentTrack)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tracks);
