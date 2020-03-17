import React, { Component } from 'react';

import playButton from '../assets/buttons/playerplay.png';
import pauseButton from '../assets/buttons/playerpause.png';


class Audioplayer extends Component {

    constructor(props) {
        super(props)

        this.player = new Audio()
        this.updateInterval = null

        this.state = {
            playing: false,
            currentTime: 0,
            duration: 0,
            progressPercentage: 0,
            ppButtonPosition: 0,
            metadataloaded: false
        }
        this.setAudioEvents()
    }

    setAudioEvents() {
        this.player.addEventListener('loadeddata', () => {
            const { duration } = this.player
            this.setState({ duration })
        })
    }

    componentDidMount() {
        // declare src
        this.player.src = this.props.track;
        // console.log(player.src.endsWith('none'))
        this.player.load();
        // update play and progress position in state
        this.updateInterval = setInterval(() => {
            this.formatTime('durationTC', this.state.duration);
            this.formatTime('currentTimeTC', this.state.currentTime);
            this.setState({
                currentTime: this.player.currentTime,
                ppButtonPosition: this.progressFill.getBoundingClientRect().width-5
                })
        }, 30);
    }

    getDuration = () => {
        return new Promise((resolve, reject) => {
                if (isNaN(this.player.duration)) {
                    reject();
                } else {
                    this.player.onloadedmetadata = () => resolve();
                }
        });
    }

    componentWillUnmount() {
        clearInterval(this.updateInterval);
        this.player.pause();
        this.player.currentTime = 0;
    }

    componentDidUpdate(prevProps, prevState) {
        // Write duration of track in state
        if (this.state.duration === 0 || this.state.duration === NaN) {
            // console.log(player.duration);
            this.setState({ duration: this.player.duration })
        }
        // Check if new src is given as prop
        if (this.props.track !== prevProps.track ) {
            let track;
            track = this.props.track;
            this.player.src = track;
        }
        if(this.state.currentTime !== this.player.currentTime) {
            this.setState({currentTime: this.player.currentTime})
        }
        // Audio End Event
        if(this.state.currentTime >= (this.state.duration-0.05)) {
            this.setState( {playing: false})
            // player.pause();
            this.player.currentTime = 0;
        }
    }

    // Format time to TC
    formatTime = (state, decimal) => {
        let timeTC = new Date(0,0);
        timeTC.setSeconds(+decimal);
        let timeTCString = timeTC.toTimeString().slice(3, 8);
        this.setState({ [state]: timeTCString});
    }

    handlePlayPause = (e) => {
        e.target.addEventListener('touchstart', () => console.log('TEST'))
        !this.state.playing ? this.play() : this.pause();
    }

    // Handle Seek Userevent
    handleSeek = (e) => {
        let clickPercentage;
        if(!this.props.isRotated) {
            clickPercentage = (e.pageX - e.target.getBoundingClientRect().left) / e.target.getBoundingClientRect().width;
        } else {
            clickPercentage = (e.pageX - e.target.getBoundingClientRect().right)*-1 / e.target.getBoundingClientRect().width;
        }
        let newPosition = clickPercentage*this.state.duration
        this.player.currentTime = newPosition;
        // player.currentTime = newPosition;
        this.setState({
            currentTime: newPosition,
        })
    }

    play = () => {
        this.setState( {playing: true} )
        this.player.play()
    }
    pause = () => {
        this.setState( {playing: false} )
        this.player.pause()
    }
    render() {
        // dynamic styles
        const progressBarFillStyle = {
            position: 'absolute',
            top: '6px',
            width: `${this.state.currentTime/this.state.duration*100}%`,
            height: '5px',
            backgroundColor: 'grey',
            pointerEvents: 'none',
        }

        const ppButtonStyle = {
            zIndex: '1',
            position: 'absolute',
            bottom: '-2px',
            width: '25px',
            height: '25px',
            // opacity: '0.5',
            // objectFit: 'contain',
            left: `${this.state.ppButtonPosition}px`,
        }

        return (
            <div className='playerContainer'>
                <div style={playerBarContainer}>
                <div style={ppButtonStyle} onTouchStart={e => this.handlePlayPause(e)}>
                    {this.state.playing === true && (
                        <img src={pauseButton} style={imgStyle}></img>
                    )}
                    {this.state.playing === false && (
                        <img src={playButton} style={imgStyle}></img>
                    )}
                </div>
                    <div
                        onClick={e => this.handleSeek(e)}
                        style={progressBarStyle}
                        ref={ref => this.progressBar = ref}
                    >
                    <div
                        style={progressBarFillStyle}
                        ref={ref => this.progressFill = ref}
                    />
                    </div>
                </div>
                <div style={tcStyle}>
                    {this.state.currentTimeTC} / {this.state.durationTC}
                </div>
            </div>
        )
    }
}

// static styles

const imgStyle = {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain'
}

const tcStyle = {
    position: 'absolute',
    bottom: '10px',
    left: '445px',
    fontVariantNumeric: 'tabular-nums'
}

const playerContainer = {
    // position: 'absolute',
    // bottom: '20px'
}
const playerBarContainer = {
    position: 'absolute',
    height: '10px',
    bottom: '35px',
    left: '30px',
    display: 'table'
}

const progressBarStyle = {
    width: '500px',
    height: '2px',
    backgroundColor: 'white',
    // display: 'table-cell',
    display: 'inline-block',
    verticalAlign: 'middle'
}

export default Audioplayer;
