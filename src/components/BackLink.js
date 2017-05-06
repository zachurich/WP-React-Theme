import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

const BackLink = ({ 
    path, 
    handleBackground 
}) => {
    return (
        <Link 
            to={ path } 
            className="back-link"
            onClick={ handleBackground }>
            Back
        </Link>
    )
}

export default BackLink;