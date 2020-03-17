import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Audioplayer from '../Audioplayer'
import SlideShow from '../SlideShow'
import Main from '../Pages/Main'

import closePopup from '../../assets/buttons/backarrow.png'
// var audioUrl = '../../audiofiles/Brauchtum_'
var audioUrl = '/audiofiles/Brauchtum_'

export default function Sub1(props) {

    const { t } = useTranslation();

    return (
        <div className='page'>
            <Main style={{opacity: '0'}} elements={props.types}/>
                {props.isRotated}
                <div style={containerStyle}>
                    <div style={linksStyle}>
                        <h1 style={titleStyle}> {t(`name${props.sub}`)} </h1>
                        <div style={subTitleStyle}>{t(`subtitel${props.sub}`)}</div>
                        <p/>
                        <div style={textStyle}>{t(`text${props.sub}`)}</div>
                        <Audioplayer
                            isRotated={props.isRotated}
                            track={`${audioUrl+props.sub}.mp3`}/>
                    </div>
                    <div style={rechtsStyle}>
                        <SlideShow
                            sub={props.sub}/>
                    </div>
                </div>
                <Link to='/main'>
                    <div style={closePopupWrapper}>
                        <img style={imgStyle} src={closePopup}></img>
                        <div style={textBackStyle}>{t('back')}</div>
                    </div>
                </Link>
            </div>
    );
}

const closePopupWrapper = {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    height: '40px',
    width: '130px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'rgb(140, 25, 32)',
    display: 'table'
    // boxSizing: 'border-box',
}

const textBackStyle = {
    // position: 'absolute',
    left: '40px',
    height: '40px',
    width: '90px',
    // borderLeft: 'solid',
    display: 'table-cell',
    textAlign: 'center',
    verticalAlign: 'middle',
    boxSizing: 'border-box',
    borderLeft: 'solid 1px rgb(140, 25, 32)',
    backgroundColor: 'rgb(55, 25, 31)'
}

const imgStyle = {
    height: '40px',
    width: '40px',
    objectFit: 'contain',
    display: 'table-cell'
}

const linksStyle = {
    float: 'left',
    width: '578px',
    // borderStyle: 'solid'
}
const rechtsStyle = {
    float: 'right',
    width: '578px',
    // borderStyle: 'solid'
}

const subTitleStyle = {
    // float: 'left',
    margin: '20px',
    marginTop: '0px',
    fontWeight: 'normal',
    fontSize: '17px'
}

const textStyle = {
    // float: 'left',
    margin: '20px',
    fontWeight: 'normal',
    fontSize: '17px',
}

const titleStyle = {
    // float: 'left',
    display: 'inline-block',
    borderStyle: 'solid',
    borderColor: 'rgb(242, 240, 255)',
    borderWidth: '2px',
    color: 'rgb(242, 240, 255)',
    paddingTop: '5px',
    paddingBottom: '5px',
    paddingLeft: '20px',
    paddingRight: '20px',
    margin: '20px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontSize: '22px',
    fontWeight: 'normal'
}

const containerStyle = {
    position: 'absolute',
    left: '50%',
    top: '29px',
    // margin: '30px',
    width: '1156px',
    height: '520px',
    marginLeft: '-578px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'rgb(140, 25, 32)',
    backgroundColor: 'rgba(44, 46, 50, 0.95)',
}
