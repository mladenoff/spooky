import { connect } from 'react-redux';

import AddTrack from './add_track';

import { addTrack } from '../../../../actions/playlist_actions';
import { orderUserPlaylists } from '../../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  trackId: ownProps.trackId,
  closeModal: ownProps.closeModal,
  playlists: orderUserPlaylists(state.playlists, state.session.currentUser.id),
});

const mapDispatchToProps = dispatch => ({
  addTrack: data => dispatch(addTrack(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTrack);
