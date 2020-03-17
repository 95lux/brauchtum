import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// import Nav from './Nav'
import Main from './Main'

import closePopup from '../../assets/buttons/backarrow.png'

const Typ1 = (props) => {

    const { t, i18n } = useTranslation();


    const rowStyle = parseInt(props.subs[0].substring(0,2)) <= 6 ? {
        height: '40%',
        width: '100%',
        position: 'absolute',
        top: '50%'
    } : {
        top: '10%',
        height: '40%',
        width: '100%',
        position: 'absolute',
        // top: '500px'
    }

    return (
        <div>
            <Main typ={props.typ} elements={props.types}/>
                <div className='popup'>
                <div style={rowStyle} className='row'>
                {props.subs.map(sub => (
                    <Link
                      key={`link/sub${sub}`}
                      to={`/sub${sub}`}
                      style={linkStyle}>
                        <div key={`/sub${sub}`}>
                            <table className='typSub'>
                                <tr>
                                        <img className='thumbnailSub' src={`/thumbnails/ebene2/Brauchtum_${sub}.png`}/>
                                        <div className='text-containerSub'>
                                            {t(`name${sub}`)}
                                        </div>
                                </tr>
                            </table>
                        </div>
                    </Link>
                ))}
                </div>
                <Link to='/main'>
                    <div style={closePopupWrapper}>
                        <img style={imgStyle} src={closePopup}></img>
                        <div style={textStyle}>{t('back')}</div>
                    </div>
                </Link>
            </div>
        </div>

    );
}
const linkStyle = {
    width: '260px',
    height: '80px',
    margin: '20px',
    marginTop: '10px',
    marginBottom: '10px'
    // marginTop: '-20px',
    // marginBottom: '200px'
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

const textStyle = {
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


export default memo(Typ1);
