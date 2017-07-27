import React from 'react';

class NewPlaylistForm extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      playlistTitle: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount(){
    this.titleInput.focus();
  }
  handleCancel(e){
    e.preventDefault();
    this.props.closeModal();
  }

  handleKeyPress(e){
    // e.preventDefault();
    if(event.key === 'Enter'){
      this.handleSubmit();
    }else if(e.key === 'Escape'){
      this.handleCancel();
    }else{this.update('playlistTitle');}
  }

  handleSubmit(e){
    e.preventDefault();
    const playlist = {playlist: {title: this.state.playlistTitle}};
    this.props.createPlaylist(playlist).then(this.props.closeModal());
    // .then(data =>
    //   this.props.history.push(`/pokemon/${data.pokemon.id}`)); TODO: a redirect? close modal?
  }

  update(field) {
    // if(e.key === 'Enter'){console.log("HIII!");}
    return event => this.setState({
      [field]: event.currentTarget.value
    });
  }

  render() {
    return(
      <div className="new-playlist-form-container">
        <h3 className="view-header">Create playlist</h3>
        <form className="new-playlist-form">
          <input type="text"
            ref={(input) => { this.titleInput = input; }}
            onChange={this.update('playlistTitle')}
            value={this.state.playlistTitle}
            className="new-playlist-title"
            placeholder="Start typing..."
            onKeyPress={this.handleKeyPress}
            />
          <div className="login-button-container">
            <button className="landing-button-light" onClick={this.handleCancel}>Cancel</button>
            <button className="landing-button" onClick={this.handleSubmit}>Create</button>
          </div>
        </form>
      </div>
    );
  }
}



export default NewPlaylistForm;

// TODO: add cancel button to form
