import React from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';

import AddTrackContainer from './add_track_modal';

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

class AddTrackModal extends React.Component {
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
      <div className="album-option add" onClick={this.openModal}>
          <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Session Modal"
          parentSelector={() => document.body}>
            <AddTrackContainer closeModal={this.closeModal} trackId={this.props.trackId}/>
        </Modal>
      </div>);
  }
}

export default AddTrackModal;
