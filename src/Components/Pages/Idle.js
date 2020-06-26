import React, { useEffect } from 'react';
import { Link , useHistory} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import '../../styles/Idle.css';

import animation from '../../assets/touchme/touchme.gif';
import idle1 from '../../assets/idlemode/idlepic_1.png';
import idle2 from '../../assets/idlemode/idlepic_2.png';
import idle3 from '../../assets/idlemode/idlepic_3.png';
import idle4 from '../../assets/idlemode/idlepic_4.png';
import idle5 from '../../assets/idlemode/idlepic_5.png';

var idleTimer = null;


export default function Idle(props) {

    const { t } = useTranslation();
    const history = useHistory();
    let playing = props.playing;

    useEffect(() => {
        startIdleTimer()
        document.documentElement.addEventListener('touchstart', () => resetIdleTimer());
    }, [])

    function startIdleTimer() {
        idleTimer = setTimeout(() => {
            if (window.location.href.substr(window.location.href.length - 1) !== '/') {
                history.push("/")
            }
        }, 360000);
    }

    function resetIdleTimer() {
        console.log('timer reset');
        clearTimeout(idleTimer);
        startIdleTimer()
    }

    return (
        <div className='page'>
            <Link  style={linkStyle} to='/main'>
                <div className="fadein">
                    <img className="f1" src={idle1}/>
                    <img className="f2" src={idle2}/>
                    <img className="f3" src={idle3}/>
                    <img className="f4" src={idle4}/>
                    <img className="f5" src={idle5}/>
                </div>
                <div className='indexWrap'>
                    <img style={animStyle} src={animation} className='animation'/>
                    <h2 style={fontStyle}>{t('idle')}</h2>
                </div>
            </Link>
        </div>
    );
}

const animStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '250px',
    width: '20%'
}

const fontStyle = {
    marginTop: '90px',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '25px',
    fontWeight: 'normal',
    textTransform: 'uppercase',
    fontWeight: 'bold'
}

const linkStyle = {
    textDecoration: 'none',
    color: 'rgb(242, 240, 255)'
}
