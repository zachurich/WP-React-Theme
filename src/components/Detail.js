import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

class Detail extends React.Component {
    render() {
        const post = this.props.info;
        console.log(post);
        return (
            <div>
                <h2>  
                    { post.title.rendered }
                </h2>
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </div>
        )
    }
}

export default Detail;