import { connect } from 'react-redux';

import Search from './search';
import { enqueuePlayback } from '../../../../actions/playback_actions';
import { selectAllTracks } from '../../../../reducers/selectors';
import {
  requestSearchResults,
  clearSearch,
} from '../../../../actions/search_actions';

const mapStateToProps = state => ({
  tracks: Object.values(state.entities.tracks.byId),
  fetching: state.fetching,
});

const mapDispatchToProps = dispatch => ({
  requestSearchResults: search => dispatch(requestSearchResults(search)),
  enqueuePlayback: (tracks, currentTrack) => dispatch(
    enqueuePlayback(tracks, currentTrack),
  ),
  clearSearch: () => dispatch(clearSearch()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
