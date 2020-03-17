import React from 'react';

import rotateButton from '../assets/buttons/turn180.png'

export default function Rotate(props) {

    return (
        <div style={rotateStyle} onClick={props.toggleRotate}>
            <img src={rotateButton}></img>
        </div>
    );

}

const rotateStyle = {
    transform: 'scale(0.50)',
    transformOrigin: 'top right',
    position: 'absolute',
    left: '1090px',
    top: '15px'
}
