import React from 'react';

class PlaylistsItem extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlayClick = this.handlePlayClick.bind(this);
  }

  handlePlayClick() {
    this.props.enqueuePlayback(this.props.tracks, this.props.idx);
  }

  render() {
    return(
      <li className="playlists-item">
        <div>
          <span>{this.props.playlist.title}</span>
          <span className="info username"> {this.props.playlist.username}</span>
        </div>
        <div className="playlist-buttons">
          { this.props.currentUser.id !== this.props.playlist.user_id ? <button className="small-follow-button">Follow</button> : null}
          <img src="http://res.cloudinary.com/spooky/image/upload/v1500841381/play_cnlwmc.svg" className="playlist-button"/>
        </div>
      </li>
    );
  }
}



export default PlaylistsItem;

//TODO: for list view


// render() {
//   return(
//     <li className="playlists-item">
//         <div>{this.props.idx + 1}</div>
//         <div className="playlists-item-sub info">
//           <span>{this.props.playlist.title}</span> <span>{this.props.playlist.username}</span></div> <img src="http://res.cloudinary.com/spooky/image/upload/v1500841381/play_cnlwmc.svg" className="playlist-button"/>
//     </li>
//   );
// }
// }
