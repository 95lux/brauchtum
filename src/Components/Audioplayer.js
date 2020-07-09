import React, { Component } from 'react';

import playButton from '../assets/buttons/playerplay.png';
import pauseButton from '../assets/buttons/playerpause.png';


class Audioplayer extends Component {

    constructor(props) {
        super(props)

        this.player = new Audio()
        this.updateInterval = null
        this.bar = React.createRef()
        this.state = {
            playing: true,
            currentTime: 0,
            duration: 0,
            progressPercentage: 0,
            ppButtonPosition: 0,
            metadataloaded: false,
            drag: false,
            dragStart: 0,
            xPos: 0,
            touchEndBlocked: false,
            lockTransport: false
        }
        this.setAudioEvents()
        this.player.autoplay = true
    }

    setAudioEvents() {
        this.player.addEventListener('loadeddata', () => {
            const { duration } = this.player
            this.setState({
                duration,
                playing: false
            })
            this.play()
        })
    }

    componentDidMount() {
        // declare src
        console.log(this.props.track);
        this.player.src = this.props.track;
        // console.log(player.src.endsWith('none'))
        this.player.load();
        // update play and progress position in state
        this.updateInterval = setInterval(() => {
            this.formatTime('durationTC', this.state.duration);
            this.formatTime('currentTimeTC', this.state.currentTime);
            if (this.state.drag==true) {
                this.setState({
                    currentTime: this.player.currentTime,
                    })
            } else {
                this.setState({
                    currentTime: this.player.currentTime,
                    ppButtonPosition: this.progressFill.getBoundingClientRect().width-5
                    })
            }

        }, 30);
    }

    getDuration = () => {
        return new Promise((resolve, reject) => {
                if (isNaN(this.player.duration)) {
                    reject();
                } else {
                    this.player.onloadedmetadata = () => {
                      this.play()
                      resolve();
                    }
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
            this.stop()

        }
    }

    // Format time to TC
    formatTime = (state, decimal) => {
        if (isNaN(decimal)) {
            decimal = 0;
        }
        let timeTC = new Date(0,0);
        timeTC.setSeconds(+decimal);
        let timeTCString = timeTC.toTimeString().slice(3, 8);
        this.setState({ [state]: timeTCString});
    }

    handleTouchStart = (e) => {
        this.setState({
            dragStart: e.touches[0].clientX,
        })

        e.target.addEventListener('touchmove', e => this.handleTouchDrag(e))
        e.target.addEventListener('touchend', e => this.handleTouchEnd())
    }

    handleTouchDrag = (e) => {
        // let event
        // e.type == 'mousemove' ? event = e : event = e.touches[0]
        this.setState({xPos: e.touches[0].clientX})
        // wenn überdraggt wird
        if (e.touches[0].clientX > this.bar.current.getBoundingClientRect().left + this.bar.current.clientWidth) {
            this.setState({xPos: this.bar.current.getBoundingClientRect().left + this.bar.current.clientWidth})
        }
        // wenn unterdraggt wird
        if (e.touches[0].clientX < this.bar.current.getBoundingClientRect().left) {
            this.setState({xPos: this.bar.current.getBoundingClientRect().left})
        }
        let buttonPos = this.state.xPos - this.bar.current.getBoundingClientRect().left;
        let negButtonPos = (this.state.xPos - this.bar.current.getBoundingClientRect().right)*-1
        this.setState({
            drag: true,
            ppButtonPosition: this.props.isRotated ? negButtonPos : buttonPos
        })
        // e.target.addEventListener('touchend', () => {
        //     this.setState({
        //         drag: false
        //     })
        // })
    }

    handleTouchEnd = () => {
        if (this.state.drag) {
            this.setState({
                drag: false
            })
            this.handleSeek(this.state.xPos)
        } else {
            if(this.state.touchEndBlocked) return;
            this.handlePlayPause()

        }
        this.setState({touchEndBlocked: true})
        setTimeout(() => {
            this.setState({touchEndBlocked: false})
            console.log('touchendFree');
        },100)
    }

    handlePlayPause = () => {
        if (this.state.lockTransport == true) return
        this.setState({
            lockTransport: true
        })
        setTimeout(() => {
            this.setState({
                lockTransport: false
            })
        }, 100)
        !this.state.playing ? this.play() : this.pause()
    }

    clickSeek = (e) => {
        this.handleSeek(e.pageX)
    }

    handleSeek = (pos) => {
        console.log('seeeek');
        let clickPercentage;
        if(!this.props.isRotated) {
            clickPercentage = (pos - this.bar.current.getBoundingClientRect().left) / this.bar.current.clientWidth;
        } else {
            clickPercentage = (pos - this.bar.current.getBoundingClientRect().right)*-1 / this.bar.current.clientWidth;
        }
        let newPosition = clickPercentage*this.state.duration
        this.player.currentTime = newPosition;
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

    stop = () => {
        this.setState( {playing: false})
        this.player.pause();
        this.player.currentTime = 0;
    }
    render() {
        // dynamic styles
        const progressBarFillStyle = {
            position: 'absolute',
            top: '5px',
            width: `${this.state.currentTime/this.state.duration*100}%`,
            height: '8px',
            backgroundColor: 'grey',
            pointerEvents: 'none',
        }

        const ppButtonStyle = {
            zIndex: '1',
            position: 'absolute',
            bottom: '-10px',
            width: '40px',
            height: '40px',
            left: `${this.state.ppButtonPosition}px`,
        }

        return (
            <div className='playerContainer'>
              {/* <iframe src="/audiofiles/silence.mp3" type="audio/mp3" allow="autoplay" id="audio" style={{display: 'none'}}></iframe> */}
                <div style={playerBarContainer} ref={this.bar}>
                <div style={ppButtonStyle} onTouchStart={e => this.handleTouchStart(e)} onClick={e => this.handlePlayPause(e)}>
                    {/* {this.state.playing === true && (
                        <img src={pauseButton} style={imgStyle}></img>
                    )}
                    {this.state.playing === false && (
                        <img src={playButton} style={imgStyle}></img>
                    )} */}
                    <img src={playButton} draggable="false" style={imgStyle}></img>
                        <img src={pauseButton} draggable="false" style={this.state.playing ? shown: hidden}></img>
                </div>
                    <div
                        onClick={e => this.clickSeek(e)}
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
    objectFit: 'contain',
    position: 'absolute',
    userDrag: 'none'
}
const hidden = {
    opacity: '0',
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain',
    transition: 'opacity 0.5s',
    position: 'absolute'
}
const shown = {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain',
    transition: 'opacity 0.5s',
    position: 'absolute'
}

const tcStyle = {
    position: 'absolute',
    bottom: '5px',
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
    bottom: '40px',
    left: '30px',
    display: 'table'
}

const progressBarStyle = {
    width: '500px',
    height: '4px',
    backgroundColor: 'white',
    // display: 'table-cell',
    display: 'inline-block',
    verticalAlign: 'middle'
}

export default Audioplayer;
