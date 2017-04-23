import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './Routes';

class Index extends React.Component {
    render() {
        return (
            <Routes />
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('app'));