import React from 'react';
import ReactHowler from 'react-howler';

class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {playing: props.playback.playing,
      mute: false};
    this.handlePauseClick = this.handlePauseClick.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleMuteClick = this.handleMuteClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("what the heck");
    this.setState({playing: nextProps.playback.playing});
  }

  handlePauseClick() {
    this.props.pausePlayback();
  }

  handlePlayClick() {
    if(this.props.playback.currentTrack){
      this.setState({
        playing: true
      });
    }
  }

  handleMuteClick() {
    if(this.state.mute){
      this.setState({mute: false});
    }else{
      this.setState({mute: true});
    }
  }

  render() {

    let howler = null;
    if (this.props.playback.currentTrack !== null) {
      howler = <ReactHowler src={this.props.playback.playQueue[this.props.playback.currentTrack].url}
        volume={this.props.volume}
        playing={this.props.playback.playing}
        mute={this.state.mute}/>;
    }

    const muteButton = this.state.mute
    ? <i className="fa fa-volume-off" aria-hidden="true"></i>
    : <i className="fa fa-volume-up" aria-hidden="true"></i>;

    return(
      <div className="widget-container">
        {howler}
        <div className="widget">
          { this.state.playing ? <a onClick={this.handlePauseClick}>Pause</a> : <a onClick={this.handlePlayClick}>Play</a>}
          <a onClick={this.handleMuteClick}>
            {muteButton}
          </a>
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
