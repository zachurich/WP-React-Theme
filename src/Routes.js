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

class Routes extends React.Component {
    handleHomePage() {
        // setup our home route to only contain data
        // from our homepage
        const homeData = this.props.pages.filter((page) => {
            return page.slug === 'home';
        });

        return homeData.map((home) => 
            <Route 
                key={ home.id }
                exact path="/"
                component={ () => 
                    <Home 
                        info={ home } 
                        loading={ this.props.loading }
                        handleNav={ this.props.handleNav }
                        handleBackground={ this.props.handleBackground }/> }
            />
        )
    }
    handleStandardPage() {
        const pageData = this.props.pages.filter((page) => {
            return page.slug !== 'blog';
        });

        return pageData.map((page) =>
            <Route 
                key={ page.id }
                path={ `/${ page.slug }/` } 
                component={ () => 
                    <Page 
                        info={ page } 
                        toggle={ this.props.toggle }
                        loading={ this.props.loading }
                        handleNav={ this.props.handleNav }
                        handleBackground={ this.props.handleBackground }/> }
            />
        )
    }
    handleBlogList() {
        const blogData = this.props.pages.filter((page) => {
            return page.slug === 'blog';
        });

        return blogData.map((blog) =>
            <Route 
                key={ blog.id }
                path={ `/${ blog.slug }/` } 
                component={ () => 
                    <Blog 
                        info={ blog } 
                        posts={ this.props.posts } 
                        toggle={ this.props.toggle } 
                        loading={ this.props.loading }
                        handleNav={ this.props.handleNav }
                        handleBackground={ this.props.handleBackground }/> }
            />
        )
    }
    handleDetailPage() {
        const postData = this.props.posts;
        return postData.map((post) =>
            <Route 
                key={ post.id }
                path={ `/${ post.slug }/` } 
                component={ () => 
                    <Detail 
                        info={ post }
                        toggle={ this.props.toggle } 
                        handleNav={ this.props.handleNav } /> }
            />
        )
    }
    render() {
        return (
            <Router history={ hashHistory }>
                <div>
                    <Nav 
                        pages={ this.props.pages }
                        toggle={ this.props.toggle } 
                        handleNav={ this.props.handleNav }
                        handleBackground={ this.props.handleBackground }
                    />
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