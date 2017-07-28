import React from 'react';

class NavPlaylistsItem extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlayClick = this.handlePlayClick.bind(this);
  }

  handlePlayClick() {
    this.props.requestPlaylistPlayback(this.props.playlist.id);
  }

  playlistTitle() {
    if(this.props.currentPlaylist === this.props.playlist.id){
      return <div className="nav-playlists-item info now-playing overflow">{this.props.playlist.title}</div>;
    }else{
      return <div className="nav-playlists-item info overflow">{this.props.playlist.title}</div>;
    }
  }

  render() {
    return(
      <li className="nav-playlists-item">
        {this.playlistTitle()}
        { this.props.playlist.count > 0 ? <img
          src="http://res.cloudinary.com/spooky/image/upload/v1500841381/play_cnlwmc.svg"
          className="playlist-button"
          onClick={this.handlePlayClick}/> : null}
      </li>
    );
  }
}



export default NavPlaylistsItem;
