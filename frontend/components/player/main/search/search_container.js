import { connect } from 'react-redux';

import Search from './search';
import { requestAllTracks } from '../../../../actions/track_actions';
import { enqueuePlayback } from '../../../../actions/playback_actions';
import { selectAllTracks } from '../../../../reducers/selectors';

const mapStateToProps = (state) => ({
  tracks: selectAllTracks(state),
  fetching: state.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  requestAllTracks: () => dispatch(requestAllTracks()),
  enqueuePlayback: (tracks, currentTrack) => dispatch(enqueuePlayback(tracks, currentTrack)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
