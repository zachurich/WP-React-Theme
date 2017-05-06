import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

import Toggle from './Toggle';

import WPAPI from 'wpapi';

class Home extends React.Component {
    componentWillUnmount() {
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
        return this.props.value !== nextProps.value;
    }
    render() {
        const home = this.props.info;
        return (
            <div className="home wrapper content-centered">
                <div
                    className={ `container ${ this.props.loading ? 'hidden' : 'content--fade-in' }` }>
                    <h1 className="home--headline">{ home.acf.headline }</h1>
                    <h2 className="home--subtext">{ home.acf.sub_text }</h2>

                    <div className="home--links">
                        <Toggle 
                            handleNav={ this.props.handleNav }
                        />
                        <Link 
                            to="/about/"
                            onClick={ this.props.handleBackground }>
                            About
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;