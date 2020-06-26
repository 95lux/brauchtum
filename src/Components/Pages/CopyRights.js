import React from 'react';

import '../../styles/App.css';


// here app catches the suspense from page in case translations are not yet loaded
export default function CopyRights() {

    return (
        <div className='page'>
            <div style={blackStyle}>
                <img src='/bilder/copyrights.jpg' style={imgStyle}></img>

            </div>
        </div>
    );
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
