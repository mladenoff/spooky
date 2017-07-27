import { connect } from 'react-redux';

import AddTrack from './new_playlist_form';

import {addTrack} from '../../../../actions/playlist_actions';
import { orderUserPlaylists } from '../../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  trackId: ownProps.trackId,
  closeModal: ownProps.closeModal,
  userPlaylists: orderUserPlaylists(state.playlists, state.session.currentUser.id),
});

const mapDispatchToProps = (dispatch) => ({
  addTrack: (trackId) => dispatch(addTrack(trackId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTrack);
