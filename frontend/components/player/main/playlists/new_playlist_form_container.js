import { connect } from 'react-redux';

import NewPlaylistForm from './new_playlist_form';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPlaylistForm);
