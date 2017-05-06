import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

import BackLink from './BackLink';
import Toggle from './Toggle';

class Blog extends React.Component {
    handlePostsOutput() {
        return this.props.posts.map((post, index) =>
            <div key={ post.id }>
                <h2 className={`blog--links-${index + 1}`}><Link to={ `/${post.slug}/` }>{ post.title.rendered }</Link></h2>
                <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            </div>
        )
    }
    render() {
        if(!this.props.loading) {
            return (
                <div className="page wrapper">
                    <Toggle 
                        toggle={ this.props.toggle }
                        handleNav={ this.props.handleNav }
                    />
                    <div className="container content--fade-in">
                        <BackLink 
                            path="/" 
                            handleBackground={ this.props.handleBackground }
                        />
                        { this.handlePostsOutput() }
                    </div>
                </div> 
            )
        } else { return null; }
    }
}

export default Blog;