import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './Routes';
import Background from './components/Background';

import WPAPI from 'wpapi';

class Index extends React.Component {
    constructor() {
        super();

        this.state = {
            pages: [],
            posts: [],
            toggle: false,
            position: -25,
            loading: false
        }

        this.handleNav = this.handleNav.bind(this);
        this.handleBackground = this.handleBackground.bind(this);
    }
    componentDidMount() {
        // dynamic API call based on url in prod
        let protocol = window.location.protocol;
        let host = window.location.host;

        // if we are in dev, make sure our API calls the proper endpoint
        if(window.location.host.indexOf('localhost') > -1) host = 'react-wordpress.loc';

        // set up the endpoint
        const wp = new WPAPI({ endpoint: `${protocol}//${host}/wp-json` });

        // update our state with page data
        wp.pages().get((err, data) => {
            console.log('pages:', data);
            this.setState({
                pages: data
            })
        })

        wp.posts().get((err, data) => {
            console.log('posts:', data);
            this.setState({
                posts: data
            })
        })
    }
    /*
     handles toggling
     our nav
    */
    handleNav(e) {  
        e.preventDefault();
        this.setState({ 
            toggle: !this.state.toggle
        });
    }
    /*
     handles our moving
     background elements
    */
    handleBackground() {

        this.setState({
            loading: true,
            toggle: false
        });

        setTimeout(() => {
            this.setState({
                loading: false
            });
        }, 1200)

        if(this.state.position < 0) {
            this.setState({
                position: this.state.position + 100
            });
        }
        if(this.state.position > 0) {
            this.setState({
                position: this.state.position - 100
            });
        }
    }
    render() {
        return (
            <div>
                <Background 
                    position={ this.state.position }
                />
                <Routes
                    pages={ this.state.pages }
                    posts={ this.state.posts }
                    toggle={ this.state.toggle }
                    loading={ this.state.loading }
                    handleNav={ this.handleNav }
                    handleBackground={ this.handleBackground }
                />
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('app'));