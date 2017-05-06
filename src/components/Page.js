import React from 'react';
import ReactDOM from 'react-dom';

import BackLink from './BackLink';
import Toggle from './Toggle';

class Page extends React.Component {
    render() {
        const page = this.props.info;
        return (
            <div className="page wrapper">
                <Toggle 
                    toggle={ this.props.toggle }
                    handleNav={ this.props.handleNav }
                />
                <div className={ `container ${ this.props.loading ? 'hidden' : 'content--fade-in' }` }>
                    <BackLink 
                        path="/"
                        handleBackground={ this.props.handleBackground }
                    />
                    <h2>{ page.title.rendered }</h2>
                    <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
                </div>
            </div> 
        )
    }
}

export default Page;