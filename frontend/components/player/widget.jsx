import React from 'react';
import ReactHowler from 'react-howler';
import raf from 'raf'; // requestAnimationFrame polyfill
import ProgressBar from 'react-progress-bar.js';
import PropTypes from 'prop-types';

class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrack: props.playback.currentTrack,
      loaded: false,
      mute: false,
      playing: props.playback.playing,
    };

    this.handleOnLoad = this.handleOnLoad.bind(this);
    this.handleOnEnd = this.handleOnEnd.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handlePauseClick = this.handlePauseClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleSkipClick = this.handleSkipClick.bind(this);
    this.handleMuteClick = this.handleMuteClick.bind(this);
    this.playPause = this.playPause.bind(this);
    this.renderSeekPos = this.renderSeekPos.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      playing: nextProps.playback.playing,
    });
    if (nextProps.playback.currentTrack !== this.props.playback.currentTrack) {
      this.clearRAF();
    }
    this.setState({
      currentTrack: nextProps.playback.currentTrack,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.playing && this.state.playing && this.state.loaded) {
      this.renderSeekPos();
    }
  }

  handleOnLoad() {
    this.setState({
      loaded: true,
      duration: this.player.duration(),
    });

    if (this.state.playing) {
      this.renderSeekPos();
    }
  }

  handleOnEnd() {
    this.setState({
      playing: false,
      progress: 0,
    });

    if (this.state.playing === false) { this.setState({ seek: 0 }); }

    this.clearRAF();

    if (
      this.props.playback.currentTrack !== null &&
      this.props.playback.currentTrack < this.props.playback.playQueue.length - 1
    ) {
      this.props.skipTrack();
    } else {
      this.props.pausePlayback();
    }
  }

  handlePauseClick() {
    this.props.pausePlayback();
  }

  handlePlayClick() {
    if (this.props.playback.currentTrack !== null) {
      this.props.play();
    }
  }

  handlePrevClick() {
    if (this.props.playback.currentTrack) {
      this.props.prevTrack();
    }
  }

  handleSkipClick() {
    if (
      this.props.playback.currentTrack !== null &&
      this.props.playback.currentTrack < this.props.playback.playQueue.length - 1
    ) {
      this.props.skipTrack();
    }
  }

  handleMuteClick() {
    if (this.state.mute) {
      this.setState({ mute: false });
    } else {
      this.setState({ mute: true });
    }
  }

  playPause() {
    if (this.state.playing) {
      return (<button className="control-button pause-button" onClick={this.handlePauseClick}>
        <img
          className="control-button-img"
          src="https://res.cloudinary.com/spooky/image/upload/v1500841148/pause_dgdaru.svg"
          alt="Pause"
        />
      </button>);
    }

    return (<button className="control-button" onClick={this.handlePlayClick}>
      <img
        className="control-button-img"
        src="https://res.cloudinary.com/spooky/image/upload/v1500841381/play_cnlwmc.svg"
        alt="Play"
      />
    </button>);
  }

  prevTrack() {
    return (
      <button className="control-button control-button-medium" onClick={this.handlePrevClick} >
        <img
          src="https://res.cloudinary.com/spooky/image/upload/q_100/v1500883825/prev_mh7tqn.svg"
          className="control-button control-button-medium"
          alt="Previous track"
        />
      </button>
    );
  }

  skipTrack() {
    return (
      <button className="control-button control-button-medium" onClick={this.handleSkipClick} >
        <img
          src="https://res.cloudinary.com/spooky/image/upload/q_100/v1500884211/next_ojnvpe.svg"
          alt="Skip track"
          className="control-button control-button-medium"
        />
      </button>
    );
  }

  trackInfo() {
    if (this.props.playback.currentTrack !== null) {
      return (<div className="track-info">
        <div className="track-image">
          <img
            src={this.props.tracks[this.props.playback.playQueue[this.props.playback.currentTrack]].imgUrl}
            alt="Current track album art"
          />
        </div>
        <div className="track-words">
          <div className="track-title overflow">
            <span>{this.props.tracks[this.props.playback.playQueue[this.props.playback.currentTrack]].title}</span>
          </div>
          <div className="artist-name overflow">
            <span>{this.props.tracks[this.props.playback.playQueue[this.props.playback.currentTrack]].artist}</span>
          </div>
        </div>
      </div>);
    }
  }

  clearRAF() {
    raf.cancel(this._raf);
  }

  renderSeekPos() {
    this.setState({
      seek: this.player.seek(),
      progress: (this.player.seek() / this.player.duration()),
    });
    if (this.state.playing) {
      this._raf = raf(this.renderSeekPos);
    }
  }

  render() {
    let howler = null;
    if (this.props.playback.currentTrack !== null) {
      howler = (<ReactHowler
        autoPlay={false}
        src={this.props.tracks[this.props.playback.playQueue[this.props.playback.currentTrack]].url}
        onLoad={this.handleOnLoad}
        onEnd={this.handleOnEnd}
        volume={this.props.volume}
        playing={this.state.playing}
        mute={this.state.mute}
        preload={false}
        html5
        ref={(ref) => { this.player = ref; }}
      />)
      ;
    }

    const muteButton = this.state.mute
      ? (<button
        className="control-button control-button-medium mute-button"
        onClick={this.handleMuteClick}
      >
        <img
          src="https://res.cloudinary.com/spooky/image/upload/v1500839847/mute_qdqplr.svg"
          className="control-button control-button-medium mute-button"
          alt="Mute"
        />
      </button>)
      : (<button
        className="control-button control-button-medium mute-button"
        onClick={this.handleMuteClick}
      >
        <img
          src="https://res.cloudinary.com/spooky/image/upload/v1500840491/unmute_ni8mso.svg"
          className="control-button control-button-medium mute-button"
          alt="Unmute"
        />
      </button>);

    // const playTime = (
    //     <div>
    //       {(typeof this.state.seek === 'number') 
    //         ? this.minutesSeconds(this.state.seek.toFixed()) 
    //         : '0:00'
    //       }
    //       <Line progress={this.state.progress} />
    //       {(this.state.duration) ? this.minutesSeconds(this.state.duration.toFixed()) : '0:00'}
    //     </div>
    //   );

    function minutesSeconds(totalSeconds) { // time in seconds
      const seconds = totalSeconds % 60;
      return (Math.floor(totalSeconds / 60)) + (seconds > 9 ? ':' : ':0') + seconds;
    }

    const Line = ProgressBar.Line;

    const barOptions = {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#FFEA82',
      trailColor: 'rgb(180,180,180)',
      trailWidth: 2,
      svgStyle: { width: '100%', height: '100%' },
      from: { color: '#FFFFFF' },
      to: { color: 'rgb(215, 30, 58, .2)' },
      step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
      },
    };

    return (
      <div className="widget-container">
        {howler}
        <div className="widget">
          {this.trackInfo()}
          <div className="track-stack">
            <div className="progress-container">
              <span>{(
                typeof this.state.seek === 'number') ? (
                  minutesSeconds(this.state.seek.toFixed())
                ) : (
                  '0:00'
                )}</span>

              <Line
                progress={this.state.progress}
                options={barOptions}
                containerClassName={'progressbar-container'}
              />

              <span>{(this.state.duration) ? (minutesSeconds(this.state.duration.toFixed())) : ('0:00')}</span>
            </div>
            <div className="track-controls">
              {this.prevTrack()}
              {this.playPause()}
              {this.skipTrack()}
            </div>
          </div>
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

// <i className="fa fa-volume-off" aria-hidden="true"></i> 
// : <i className="fa fa-volume-up" aria-hidden="true"></i>}

// { this.state.playing
//   ? <a onClick={this.handlePauseClick}>Pause</a>
//   : <img onClick={this.handlePlayClick}
//   className ="control-button"
//   src="https://res.cloudinary.com/spooky/image/upload/v1500841381/play_cnlwmc.svg" />}

// <div>
//   {'Status: '}
//   {(this.state.seek !== undefined) ? this.state.seek.toFixed(2) : '0.00'}
//   {' / '}
//   {(this.state.duration) ? this.state.duration.toFixed(2) : 'NaN'}
// </div>
