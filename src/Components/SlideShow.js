import React, { useState, useEffect, Component } from 'react';


import { CSSTransition, TransitionGroup } from 'react-transition-group';

import '../styles/SlideShow.css'

import nextButton from '../assets/buttons/forward.png'
import prevButton from '../assets/buttons/back.png'

import picsDB from '../db/pics.json'

let i = 0;

const imgUrl = '/bilder/'

class SlideShow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pic: picsDB[this.props.sub][0],
            index: 0,
            pics : picsDB[this.props.sub]
        };

    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.index !== prevState.index) {
            this.setState({
                pic: this.state.pics[this.state.index]
            })
        }
    }

    // Increment/Decrement ImgArray Index and handle index overflow
    handleImgChange = (dir) => {
        if (dir==='next') {
            this.setState({
                index: this.state.index+1
            })
            if (this.state.index >= this.state.pics.length - 1) {
                this.setState({
                    index: 0
                })
            };
        }
        if (dir ==='prev') {
            this.setState({
                index: this.state.index-1
            })
            if (this.state.index <= 0) {
                this.setState({
                    index: this.state.pics.length -1
                })
            };
        }
    };
    render() {
        return(
                <div style={containerStyle}>
                    {/* <img onTouchStart={() => this.handleImgChange('prev')} src={prevButton} style={buttonStyle}></img> */}
                    {this.state.index === 0 ?
                        <div style={buttonStyleLeft}/> : <img onClick={() => this.handleImgChange('prev')} src={prevButton} style={buttonStyleLeft}></img>
                    }
                        <TransitionGroup >
                            <CSSTransition
                                key={this.state.pic}
                                timeout={300}
                                classNames='picfade'
                            >
                                <img
                                    src={`/bilder/${this.state.pic}`}
                                    key={this.state.pic}
                                    style={img}
                                />
                                {/* <object
                                    data={`/bilder/${this.state.pic}`}
                                    type={'image/jpg'}
                                    key={this.state.pic}
                                    className='img'
                                /> */}
                            </CSSTransition>
                        </TransitionGroup>
                        {this.state.index >= this.state.pics.length -1 ?
                        <div style={buttonStyleRight}/> : <img onClick={() => this.handleImgChange('next')} src={nextButton} style={buttonStyleRight}></img>

                    }
                    </div>
        );
    }
}
const imgWrapper = {
    // marginTop: '80px',
    height:'300px',
    width:'400px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'rgb(242, 240, 255)',

    // float: 'left'
    // margin: 'auto'
}
const img = {
    maxWidth: '380px',
    maxHeight: '380px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'rgb(242, 240, 255)',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    // transform: 'translateY(-50%)',
}

const buttonStyleLeft = {
    position: 'absolute',
    transform: 'translateY(-50%)',
    top: '50%',
    left: '20px',
    height: '40px',
    width: '40px',
    margin: '10px'
    // marginTop: '344px'
}

const buttonStyleRight = {
    position: 'absolute',
    transform: 'translateY(-50%)',
    top: '50%',
    right: '20px',
    height: '40px',
    width: '40px',
    margin: '10px'
    // marginTop: '344px'
}

const containerStyle = {
    position: 'relative',
    width: '560px',
    height: '500px',

}

export default SlideShow;
