import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  hashHistory,
  Route,
  Link
} from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import Page from './components/Page';
import Blog from './components/Blog';
import Detail from './components/Detail';

import WPAPI from 'wpapi';

class Routes extends React.Component {
    constructor() {
        super();
        this.state = {
            pages: [],
            posts: [],
        }

        this.handleStandardPage = this.handleStandardPage.bind(this);
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
    handleHomePage() {
        // setup our home route to only contain data
        // from our homepage
        const homeData = this.state.pages.filter((page) => {
            return page.slug === 'home';
        });

        return homeData.map((home) => 
                <Route 
                    key={ home.id }
                    exact path="/"
                    component={ () => <Home info={ home } /> }
                />
        )
    }
    handleStandardPage() {
        const pageData = this.state.pages.filter((page) => {
            return page.slug !== 'blog';
        });

        return pageData.map((page) =>
            <Route 
                key={ page.id }
                path={ `/${ page.slug }/` } 
                component={ () => 
                    <Page 
                        info={ page } 
                    /> }
            />
        )
    }
    handleBlogList() {
        const blogData = this.state.pages.filter((page) => {
            return page.slug === 'blog';
        });

        return blogData.map((blog) =>
            <Route 
                key={ blog.id }
                path={ `/${ blog.slug }/` } 
                component={ () => 
                    <Blog 
                        info={ blog } 
                        posts={ this.state.posts } 
                    /> }
            />
        )
    }
    handleDetailPage() {
        const postData = this.state.posts;
        return postData.map((post) =>
            <Route 
                key={ post.id }
                path={ `/${ post.slug }/` } 
                component={ () => 
                    <Detail 
                        info={ post } 
                    /> }
            />
        )
    }
    render() {
        return (
            <Router history={ hashHistory }>
                <div>
                    <Nav pages={ this.state.pages } />
                    { this.handleHomePage() }
                    { this.handleStandardPage() }
                    { this.handleBlogList() }
                    { this.handleDetailPage() }
                </div>
            </Router>
        )
    }
}

export default Routes;