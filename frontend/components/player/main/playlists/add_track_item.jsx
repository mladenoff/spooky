import React from 'react';

class AddTrackItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddTrack = this.handleAddTrack.bind(this);
  }

  handleAddTrack(e) {
    e.preventDefault();
    const data = {playlist_id: this.props.playlist.id, playlisting: {track_id: this.props.trackId}};
    this.props.addTrack(data).then(this.props.closeModal());
  }

  render() {
    return(
      <li className="playlists-item">
          <div className="playlists-item-sub info" onClick={this.handleAddTrack}>{this.props.playlist.title}</div>
      </li>
    );
  }
}



export default AddTrackItem;
