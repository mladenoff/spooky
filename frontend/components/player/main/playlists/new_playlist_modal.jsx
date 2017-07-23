import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  // overlay : {
  //   backgroundColor : rgba(0, 0 ,0 , 0.8)
  // },
  content : {
    borderRadius          : '4px',
    height                : "70%",
    width                 : "500px",
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    border                : '2px solid #ccc'
  }
};

class NewPlaylistModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }
  //
  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = '#f00';
  // }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    let formType;
    return (
      <div>
        {this.props.type === "upload"
          ? <div>
          <button className="auth-buts" onClick={this.openModal}>Upload a Song</button>
          <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Session Modal">
          <SongUploadFormContainer type={this.props.type}
                             song={this.props.song}
                             closeModal={this.closeModal}
                             user={this.props.id} />
        </Modal></div>
        : <div>
        <button className="auth-buts" onClick={this.openModal}>Edit Your Song</button>
          <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Session Modal">
          <SongUploadFormContainer type={this.props.type}
                             song={this.props.song}
                             closeModal={this.closeModal}
                             user={this.props.id} />
        </Modal>
        </div>
            }

      </div>
    );
  }
}

export default NewPlaylistModal;
