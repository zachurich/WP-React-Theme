import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

class Blog extends React.Component {
    handlePostsOutput() {
        return this.props.posts.map((post) =>
            <div key={ post.id }>
                <p><Link to={ `/${post.slug}/` }>{ post.title.rendered }</Link></p>
                <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            </div>
        )
    }
    render() {
        return (
            <div>  
                { this.handlePostsOutput() }
            </div> 
        )
    }
}

export default Blog;