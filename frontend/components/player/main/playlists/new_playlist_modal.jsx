import React from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';

import NewPlaylistFormContainer from './new_playlist_form_container';

const customStyles = {
  overlay : {
    zIndex: 50
  },
  content : {
    borderRadius          : '0px',
    height                : "400px",
    minWidth              : '400px',
    width                 : "100%",
    top                   : '50%',
    left                  : '50%',
    right                 : 0,
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding               : '0',
    border                : '0px',
    color                 : 'white',
    backgroundColor       : 'white'
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
      <div className="new-playlist-button">
          <button onClick={this.openModal} className="new-playlist-button">New playlist</button>
          <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Session Modal"
          parentSelector={() => document.body}>

            <NewPlaylistFormContainer closeModal={this.closeModal}/>

        </Modal>
      </div>);
  }
}

export default NewPlaylistModal;
