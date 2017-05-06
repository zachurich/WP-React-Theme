import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

import WPAPI from 'wpapi';

const Nav = ({
    pages,
    toggle,
    handleNav,
    handleBackground
}) => {
    let animation = 'nav--slide-out';

    animation = toggle ? 'nav--slide-in' : 'nav--slide-out';
    return (
        <div className={`nav ${animation} `}>
            <ul className="container">
                { 
                    pages.map((page) => 
                        <li 
                            onClick={ handleBackground }
                            key={ page.id }>
                            <Link 
                                to={ page.slug === 'home' ? '/' : `/${ page.slug }/` }
                                onClick={ handleNav }>
                                { page.title.rendered }
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Nav;