import React from 'react';

class NewPlaylistForm extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      playlistTitle: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.titleInput.focus();
  }

  handleSubmit(e){
    e.preventDefault();
    const playlist = {playlist: {title: this.state.playlistTitle}};
    this.props.createPlaylist(playlist).then(this.props.closeModal());
    // .then(data =>
    //   this.props.history.push(`/pokemon/${data.pokemon.id}`)); TODO: a redirect? close modal?
  }

  // handleCancel(){ TODO: for cancel button (see bottom of this file)
  //
  // }

  update(field) {
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
            value={this.state.playlistTitle}
            onChange={this.update('playlistTitle')}
            className="new-playlist-title"
            placeholder="Start typing..."
            />
          <div className="login-button-container">
            <button className="landing-button" onClick={this.handleSubmit}>Create</button>
          </div>
        </form>
      </div>
    );
  }
}



export default NewPlaylistForm;

//<button className="landing-button-light">Cancel</button> TODO: add cancel button to form
