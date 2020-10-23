import React from 'react';

import '../../styles/App.css';



// here app catches the suspense from page in case translations are not yet loaded
export default function CopyRights() {

console.log();

    return (
        <div className='page'>
            <div style={blackStyle}>
                <img src='/bilder/copyrights.jpg' style={imgStyle}></img>
                <div style={versionStyle}>v{process.env.REACT_APP_VERSION}</div>
            </div>
        </div>
    );
}

const versionStyle = {
    position: 'absolute',
    bottom: '0',
    right: '0'

}

const imgStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}

const blackStyle = {
    height: '100%',
    width: '100%',
    backgroundColor: 'black'
}
