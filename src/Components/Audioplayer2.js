import React, { Component } from 'react'

import playButton from '../assets/buttons/playerplay.png'
import pauseButton from '../assets/buttons/playerpause.png'

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

            this.play()
        })
    }

    componentDidMount() {
        this.setNewAudio()
    }

    componentWillUnmount() {
        this.stopProgress()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.track !== prevProps.track) {
            this.setNewAudio()
        }
    }

    setNewAudio(src = null) {

        if (!src) src = this.props.track

        this.player.src = src
        this.player.load()
    }


    toggle() {

        this.state.playing
            ? this.pause()
            : this.play()

        this.setState({
            playing: !this.state.playing
        })

    }

    play() {
        this.player.play()
        this.updateInterval = setInterval(this.progress.bind(this), 200)
    }

    pause() {
        clearInterval(this.updateInterval)
        this.player.pause()
    }

    stop() {
        this.pause()
        this.player.currentTime = 0
    }

    progress() {
        const { currentTime } = this.player
        this.setState({ currentTime })
    }

    // Format time to TC
    formatTime(decimal) {

        let timeTC = new Date(0, 0)
        timeTC.setSeconds(+decimal)

        return timeTC.toTimeString().slice(3, 8)
    }

    handleSeek(e) {

        let rec = e.target.getBoundingClientRect()
        let left = rec.left
        let right = rec.right
        let width = rec.width

        let clickPercentage = (e.pageX - right) * -1 / width

        if (!this.props.isRotated) {
            clickPercentage = (e.pageX - left) / width
        }

        let currentTime = (clickPercentage * this.state.duration)

        this.player.currentTime = currentTime

        this.setState({ currentTime })
    }

    showButton() {

        if (this.state.playing) {
            return <img src={pauseButton} style={imgStyle} />
        }

        return <img src={playButton} style={imgStyle} />
    }

    render() {

        let newWidth = this.state.currentTime / this.state.duration * 100

        const progressBarFillStyle.width = `${newWidth}%`
        const ppButtonStyle.left = `${this.state.ppButtonPosition}px`

        return (
            <section className='playerContainer'>
                <div style={playerBarContainer}>

                    <div style={ppButtonStyle} onTouchEnd={this.toggle.bind(this)}>
                        {this.showButton()}
                    </div>

                    <div
                        onClick={this.handleSeek.bind(this)}
                        style={progressBarStyle}
                        ref={ref => this.progressBar = ref}
                    >
                        <i style={progressBarFillStyle} ref={ref => this.progressFill = ref} />
                    </div>
                </div>

                <time style={tcStyle}>
                    {this.formatTime(this.state.currentTime)} / {this.formatTime(this.state.duration)}
                </time>
            </section>
        )
    }
}

// static styles
let progressBarFillStyle = {
    position: 'absolute',
    top: '6px',
    height: '5px',
    width: '0%',
    backgroundColor: 'grey',
    pointerEvents: 'none'
}

let ppButtonStyle = {
    zIndex: '1',
    position: 'absolute',
    bottom: '-2px',
    width: '25px',
    height: '25px'
}

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
    display: 'inline-block',
    verticalAlign: 'middle'
}

export default Audioplayer
