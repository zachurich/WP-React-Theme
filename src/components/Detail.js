import React from 'react';
import ReactDOM from 'react-dom';

import BackLink from './BackLink';
import Toggle from './Toggle';

class Detail extends React.Component {
    render() {
        const post = this.props.info;
        return (
            <div className="page wrapper">
                <Toggle 
                    toggle={ this.props.toggle }
                    handleNav={ this.props.handleNav }
                />
                <div className="container">
                    <BackLink path="/blog"/>
                    <h2>  
                        { post.title.rendered }
                    </h2>
                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                </div>
            </div>
        )
    }
}

export default Detail;