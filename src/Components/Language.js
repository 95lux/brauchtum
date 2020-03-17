import React from 'react';
import { useTranslation } from 'react-i18next';

import '../styles/App.css'

import langBarPic from '../assets/buttons/language.png'

export default function Language() {

    const { i18n } = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
        console.log(i18n.language);
    };


    return (
        <div className='langBar'>
            <div style={i18n.language === 'en' ? buttonStyleSelected : buttonStyle} onClick={() => changeLanguage('en')} className='navButton'>
                <div className='navButtonFont'>EN</div>
        </div>
            <div style={barStyle}/>
            <div style={i18n.language === 'cz' ? buttonStyleSelected : buttonStyle} onClick={() => changeLanguage('cz')} className='navButton'>
                <div className='navButtonFont'>CZ</div>
            </div>
            <div style={barStyle}/>
            <div style={i18n.language === 'de' ? buttonStyleSelected : buttonStyle} onClick={() => changeLanguage('de')} className='navButton'>
                <div className='navButtonFont'>DE</div>
            </div>
        </div>
    );
}

const barStyle = {
    position: 'relative',
    float: 'right',
    borderRight: 'solid',
    borderWidth: '2px',
    height: '30px',
    marginLeft: '-2px',
    top: '7px',
}

const imageWrapper = {
    boxSizing: 'border-box',
    // float: 'right',
    position: 'absolute',
    heigth: '50px',
    width: '231px',
    borderStyle: 'none',
    textAlign: 'center',
    // padding: '2px',
    paddingTop: '4px',
    overflow: 'hidden',
    maxHeight: '77px',
    textIndent: '8px'
}

const buttonStyle = {
    marginLeft: '-2px',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: 'rgba(242, 240, 255, 0)',
    width: '40px',
    height: '40px',
    float: 'right',
    transition: 'border-color 300ms ease',
}
const buttonStyleSelected = {
    marginLeft: '-2px',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: 'rgba(242, 240, 255, 1)',
    width: '40px',
    height: '40px',
    float: 'right',
    transition: 'border-color 300ms ease',
}
