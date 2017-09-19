playlistIcon() {
  if(this.props.playlist.count > 0){
    if(this.props.currentPlaylist === this.props.playlist.id){
      return null;
      // return <img TODO: this will need some pause logic
      // src="https://res.cloudinary.com/spooky/image/upload/v1500841148/pause_dgdaru.svg"
      // className="playlist-button"
      // onClick={this.handlePlayClick}/>;
    }else{return <img
      src="https://res.cloudinary.com/spooky/image/upload/v1501389143/play_hover_egewb5.svg"
      className="playlist-button"
      onClick={this.handlePlayClick}/>;
    }
  }
}

//TODO: make this a component
