import React from 'react';

class NewPlaylistForm extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      playlistTitle: null
    };
  }

  componentDidMount(){
    this.titleInput.focus();
  }

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
            onChange={this.update('title')}
            className="new-playlist-title"
            placeholder="Start typing..."
            />
          <div className="login-button-container">
          <button className="landing-button-light">Cancel</button>
          <button className="landing-button">Create</button>
          </div>
      </form>
      </div>
    );
  }
}



export default NewPlaylistForm;
