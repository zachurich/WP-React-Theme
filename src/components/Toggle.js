import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

const Toggle = ({
    toggle,
    handleNav
}) => {
    let animation = null;
    if(toggle === true) {
        animation = 'nav--slide-in';
    }
    if(toggle === false) {
        animation = 'nav--slide-out';
    }
    return (
        <a 
            className={`nav--toggle button ${animation}`}
            onClick={ handleNav }>
            Links
        </a>
    )
}

export default Toggle;