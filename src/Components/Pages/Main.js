import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Nav from '../Nav'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import '../../styles/Main.css';

class Main extends Component {
    constructor(components) {
        super();
        this.state = {
            componentToShow: {},
            componentIsShown: false,

        };
    }

    handleTouch = (e) => {
        let url = window.location.href.split('/');
        if(url.pop().startsWith('typ')){
            e.preventDefault();
        }
    }

    render() {
        const thumbUrl = '/thumbnails/ebene1/'
        const ComponentToShow = this.state.componentToShow;
        const { t } = this.props;
        const { elements } = this.props;

        return (
            <div className='page' style={{textAlign: 'center'}}>
                {elements.map(element => (
                    <Link
                      style={element === this.props.typ ? zIndexStyleSelected : zIndexStyleUnselected}
                      to={`/typ${element}`}
                      onClick={e => this.handleTouch(e)}
                    >
                        <div
                          style={element === this.props.typ ? typStyleSelected : typStyleUnselected}
                          className='typ'
                         >
                            <img className='thumbnail' src={thumbUrl+element+'.png'}></img>
                            <div
                              style={element === this.props.typ ? textContainerStyle : {}}
                              className='text-container'
                            >
                                {t(`typ${element}`)}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        );
    }

}

const typStyleUnselected = {
    display: 'inline-block',
    margin: '30px',
    marginTop: '100px',
    marginBottom: '-30px'
}
const typStyleSelected = {
    display: 'inline-block',
    margin: '30px',
    marginTop: '100px',
    marginBottom: '-30px',
    borderColor: 'rgb(242, 240, 255)'
}
const zIndexStyleSelected = {
    zIndex: '2',
    position: 'relative'
}
const zIndexStyleUnselected = {
    zIndex: '0',
    position: 'relative'
}

const textContainerStyle = {
    borderColor: 'rgb(242, 240, 255)',
    backgroundColor: 'rgb(140, 25, 32)'
}


export default withTranslation()(Main);
