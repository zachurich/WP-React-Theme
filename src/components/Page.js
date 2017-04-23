import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

class Page extends React.Component {
    render() {
        const page = this.props.info;
        return (
            <div>  
                { page.title.rendered }
                <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
            </div> 
        )
    }
}

export default Page;