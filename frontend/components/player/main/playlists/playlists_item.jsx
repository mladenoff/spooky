import React from 'react';

class PlaylistsItem extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleFollowClick = this.handleFollowClick.bind(this);
    this.handleUnfollowClick = this.handleUnfollowClick.bind(this);
  }

  handlePlayClick() {
    this.props.requestPlaylistPlayback(this.props.playlist.id);
  }

  handleFollowClick() {
    this.props.followPlaylist(this.props.playlist.id);
  }
  handleUnfollowClick() {
    this.props.unfollowPlaylist(this.props.playlist.id);
  }

  render() {
    return(
      <li className="playlists-item">
        <div>
          <span>{this.props.playlist.title}</span>
          <span className="info username"> {this.props.playlist.username}</span>
        </div>
        <div className="playlist-buttons">
          { this.props.currentUser.id !== this.props.playlist.user_id && !this.props.currentUser.follows.includes(this.props.playlist.id) ?
            <button className="small-follow-button" onClick={this.handleFollowClick}>Follow</button> :
              null}
          { this.props.currentUser.id !== this.props.playlist.user_id && this.props.currentUser.follows.includes(this.props.playlist.id) ?
            <button className="small-follow-button" onClick={this.handleUnfollowClick}>Unfollow</button> :
              null}
          <img src="http://res.cloudinary.com/spooky/image/upload/v1500841381/play_cnlwmc.svg" className="playlist-button" onClick={this.handlePlayClick}/>
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
