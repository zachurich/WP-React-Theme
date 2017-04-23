import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

import WPAPI from 'wpapi';

class Home extends React.Component {
    render() {
        const home = this.props.info;
        return (
            <div>
                <h1>{ home.acf.headline }</h1>
                <h2>{ home.acf.sub_text }</h2>
            </div>
        )
    }
}

export default Home;