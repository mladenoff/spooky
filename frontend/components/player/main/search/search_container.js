import { connect } from 'react-redux';
import _ from 'lodash';

import Search from './search';
import {
  requestSearchResults,
  clearSearch,
} from '../../../../actions/search_actions';
import { enqueuePlayback } from '../../../../actions/playback_actions';

const mapStateToProps = state => ({
  tracks: Object.values(_.pick(state.entities.tracks.byId, state.ui.uiTracks)), // make me a selector?
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
