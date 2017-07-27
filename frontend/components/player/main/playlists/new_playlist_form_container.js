import { connect } from 'react-redux';

import NewPlaylistForm from './new_playlist_form';

import {createPlaylist} from '../../../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  closeModal: ownProps.closeModal,
});

const mapDispatchToProps = (dispatch) => ({
  createPlaylist: (playlist) => dispatch(createPlaylist(playlist))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPlaylistForm);
