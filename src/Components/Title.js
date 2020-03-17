import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import '../styles/App.css'

export default function Title() {


    const { t, i18n } = useTranslation();

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    return (
        <div>
            <h1 className='title'>{t('title1')}</h1>
        </div>
    );
}
