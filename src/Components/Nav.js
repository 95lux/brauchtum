import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import '../styles/App.css'

import navBarPic from '../assets/buttons/navbar.png'
import homeButton from '../assets/buttons/home_pfad.svg'

export default function Nav(props) {

    const [ currentPage, changeCurrentPage ] = useState('/');

    //prevent Transition when on /main
    function handleClick(e, route) {
        let url = window.location.href.split('/');
        if(url.pop().endsWith(route.split('/').pop()) && currentPage === route){
            e.preventDefault();
        }
        changeCurrentPage(route)
    }

    return (
        <div className='navBar'>
            {/* <div style={imageWrapper}></div> */}
            <Link to='/main' onClick={e => handleClick(e, '/main')}>
                <div style={currentPage==='/main' ? buttonStyleSelected : buttonStyle} className='navButton'><img src={homeButton} style={{height: '70%'}}/></div>
            </Link>
            <Link to='/information' onClick={e => handleClick(e, '/information')}>
                <div style={barStyle}></div>
                <div style={currentPage==='/information' ? buttonStyleSelected : buttonStyle} className='navButton' ><div className='navButtonFont'>i</div></div>
            </Link>
            <Link to='/copyrights' onClick={e => handleClick(e, '/copyrights')}>
                <div style={barStyle}></div>
                <div style={currentPage==='/copyrights' ? buttonStyleSelected : buttonStyle} className='navButton' ><div className='navButtonFont'>©</div></div>
            </Link>

        </div>
    );
}

const barStyle = {
    position: 'relative',
    float: 'left',
    borderLeft: 'solid',
    borderWidth: '2px',
    height: '30px',
    marginRight: '-2px',
    top: '7px',
}

const imageWrapper = {
    position: 'absolute',
    height: '55px',
    width: '169px',
    borderStyle: 'dashed',
    borderWidth: '2px',
    overflow: 'hidden',
    opacity: '0'
}

const picStyle = {
    // position: 'absolute',
    // top: '5px',
    // paddingLeft: '-30px'
    // left: '18px'
}

const buttonStyle = {
    marginRight: '-2px',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: 'rgba(242, 240, 255, 0)',
    width: '40px',
    height: '40px',
    float: 'left',
    transition: 'border-color 300ms ease',
}
const buttonStyleSelected = {
    marginRight: '-2px',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: 'rgba(242, 240, 255, 1)',
    width: '40px',
    height: '40px',
    float: 'left',
    transition: 'border-color 300ms ease',
}
