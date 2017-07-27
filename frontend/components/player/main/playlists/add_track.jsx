import React from 'react';
import AddTrackItem from './add_track_item';

class AddTrack extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      playlistTitle: ""
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
  }


  // handleCancel(){ TODO: for cancel button (see bottom of this file)
  //
  // }

  render() {
  const { playlists } = this.props;
  if (this.props.fetching === true) {
    return <Loading />;
  }

  return(
    <div className="add-track">
      <h3 className="view-header">Choose playlist</h3>
      <ul>
        {playlists.map((playlist, idx) =>
          (<AddTrackItem key={playlist.id}
            playlist={playlist}
            addTrack={this.props.addTrack}
            trackId={this.props.trackId}
            closeModal={this.props.closeModal}/>))}

      </ul>
    </div>
  );
  }
}



export default AddTrack;
