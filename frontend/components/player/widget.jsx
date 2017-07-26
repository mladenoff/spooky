import React from 'react';
import ReactHowler from 'react-howler';
import raf from 'raf'; // requestAnimationFrame polyfill

class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: props.playback.playing,
      mute: false,
      currentTrack: props.playback.currentTrack,
      loaded: false,
    };

    this.handleOnLoad = this.handleOnLoad.bind(this);
    this.handleOnEnd = this.handleOnEnd.bind(this);
    this.renderSeekPos = this.renderSeekPos.bind(this);
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
    });
    if(nextProps.playback.currentTrack !== this.state.currentTrack){this.clearRAF();}
    this.setState({
      currentTrack: nextProps.playback.currentTrack,
    });
  }

  // componentDidUpdate(){
  //   if(this.state.playing && this.state.loaded){this.renderSeekPos();}
  // } TODO: MAKE ME GO

  renderSeekPos () {
    this.setState({
      seek: this.player.seek()
    });
    if (this.state.playing) {
      this._raf = raf(this.renderSeekPos);
    }
  }

  handleOnLoad () {
    this.setState({
      loaded: true,
      duration: this.player.duration()
    });
    if (this.state.playing) {this.renderSeekPos();}
  }

  handleOnEnd () {
    // this.setState({
    //   playing: false
    // });
    this.clearRAF();
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

  clearRAF () {
    raf.cancel(this._raf);
  }
  // {this.props.playback.playQueue[this.props.playback.currentTrack].title}

  render() {
    let howler = null;
    if (this.props.playback.currentTrack !== null) {
      howler = <ReactHowler
        src={this.props.playback.playQueue[this.props.playback.currentTrack].url}
        onLoad={this.handleOnLoad}
        onEnd={this.handleOnEnd}
        volume={this.props.volume}
        playing={this.props.playback.playing}
        mute={this.state.mute}
        html5={true}
        ref={(ref) => (this.player = ref)}/>
      ;
    }

    const muteButton = this.state.mute
      ? <img src="http://res.cloudinary.com/spooky/image/upload/v1500839847/mute_qdqplr.svg"
      className="control-button control-button-medium"
      onClick={this.handleMuteClick} alt="Mute"/>
      : <img src="http://res.cloudinary.com/spooky/image/upload/v1500840491/unmute_ni8mso.svg"
      className="control-button control-button-medium"
      onClick={this.handleMuteClick} alt="Unmute"/>;

    const playTime = (
        <div>
          {(this.state.seek !== undefined) ? this.state.seek.toFixed(2) : '0.00'}
          {'—'}
          {(this.state.duration) ? this.state.duration.toFixed(2) : '0.00'}
        </div>
      );

    return(
      <div className="widget-container">
        {howler}
        <div className="widget">
          {playTime}
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

// <div>
//   {'Status: '}
//   {(this.state.seek !== undefined) ? this.state.seek.toFixed(2) : '0.00'}
//   {' / '}
//   {(this.state.duration) ? this.state.duration.toFixed(2) : 'NaN'}
// </div>
