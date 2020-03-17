import React from 'react';

import '../../styles/App.css';

// here app catches the suspense from page in case translations are not yet loaded
export default function CopyRights() {

    return (
        <div className='page'>
            <h1>Copyrights</h1>
            <a>Inhalte folgen</a>
        </div>
    );
}
