import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

import WPAPI from 'wpapi';

class Nav extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    { 
                        this.props.pages.map((page) => 
                            <li key={ page.id }>
                                <Link 
                                    to={ page.slug === 'home' ? '/' : `/${ page.slug }/` }>
                                    { page.title.rendered }
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Nav;