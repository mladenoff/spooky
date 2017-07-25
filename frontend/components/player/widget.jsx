import React from 'react';
import ReactHowler from 'react-howler';

class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: props.playback.playing,
      mute: false,
    };
    this.handlePauseClick = this.handlePauseClick.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleMuteClick = this.handleMuteClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleSkipClick = this.handleSkipClick.bind(this);
    this.playPause = this.playPause.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      playing: nextProps.playback.playing,
      // currentTrack: this.props.playback.playQueue[this.props.playback.currentTrack],
  });
  }

  handlePauseClick() {
    this.props.pausePlayback();
  }

  handlePlayClick() {
    if(this.props.playback.currentTrack !== null){
      this.props.play();
    }
  }

  handlePrevClick() {
    if (this.props.playback.currentTrack) {
      this.props.prevTrack();
    }
  }

  handleSkipClick() {
    if (this.props.playback.currentTrack !== null && this.props.playback.currentTrack < this.props.playback.playQueue.length - 1) {
      this.props.skipTrack();
    }
  }

  handleMuteClick() {
    if(this.state.mute){
      this.setState({mute: false});
    }else{
      this.setState({mute: true});
    }
  }

  playPause() {
    if (this.state.playing) {
      return <img onClick={this.handlePauseClick}
        className="control-button"
        src="http://res.cloudinary.com/spooky/image/upload/v1500841148/pause_dgdaru.svg" />;
    }else{
      return <img onClick={this.handlePlayClick}
        className="control-button"
        src="http://res.cloudinary.com/spooky/image/upload/v1500841381/play_cnlwmc.svg" />;
    }
  }

  prevTrack() {
    return<img
      src="http://res.cloudinary.com/spooky/image/upload/q_100/v1500883825/prev_mh7tqn.svg"
      className="control-button control-button-medium"
      onClick={this.handlePrevClick}/>;
  }

  skipTrack() {
    return <img
      src="http://res.cloudinary.com/spooky/image/upload/q_100/v1500884211/next_ojnvpe.svg"
      className="control-button control-button-medium"
      onClick={this.handleSkipClick}/>;
  }

  trackInfo() {
    if (this.props.playback.currentTrack !== null){
      return <div className="track-info">
        <div className="track-image"><img src={this.props.playback.playQueue[this.props.playback.currentTrack].img_url} /></div>
        <div className="track-words">
          <div className="track-title"><span>{this.props.playback.playQueue[this.props.playback.currentTrack].title}</span></div>
          <div className="artist-name"><span>{this.props.playback.playQueue[this.props.playback.currentTrack].artist}</span></div>
        </div>
      </div>;
    }
  }
  // {this.props.playback.playQueue[this.props.playback.currentTrack].title}

  render() {
    let howler = null;
    if (this.props.playback.currentTrack !== null) {
      howler = <ReactHowler
        src={this.props.playback.playQueue[this.props.playback.currentTrack].url}
        volume={this.props.volume}
        playing={this.props.playback.playing}
        mute={this.state.mute}
        html5={true}/>;
    }

    const muteButton = this.state.mute
      ? <img src="http://res.cloudinary.com/spooky/image/upload/v1500839847/mute_qdqplr.svg"
      className="control-button"
      onClick={this.handleMuteClick} alt="Mute"/>
      : <img src="http://res.cloudinary.com/spooky/image/upload/v1500840491/unmute_ni8mso.svg"
      className="control-button"
      onClick={this.handleMuteClick} alt="Unmute"/>;

    return(
      <div className="widget-container">
        {howler}
        <div className="widget">
          {this.trackInfo()}
          {this.prevTrack()}
          {this.playPause()}
          {this.skipTrack()}
          {muteButton}
        </div>
      </div>
    );
  }
}

export default Widget;

// this.setState({
//   playing: true,
// });

// <i className="fa fa-volume-off" aria-hidden="true"></i> : <i className="fa fa-volume-up" aria-hidden="true"></i>}

// { this.state.playing
//   ? <a onClick={this.handlePauseClick}>Pause</a>
//   : <img onClick={this.handlePlayClick}
//   className ="control-button"
//   src="http://res.cloudinary.com/spooky/image/upload/v1500841381/play_cnlwmc.svg" />}
