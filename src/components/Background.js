import React from 'react';
import ReactDOM from 'react-dom';

class Background extends React.Component {
    render() { 
        const position = this.props.position;
        return (
            <div className="background-fixed">
                <div 
                    className="circle circle--blue" 
                    style={{
                        top: `${position}%`,
                        right: `${position}%`, 
                    }}>
                </div>
                <div 
                    className="circle circle--red" 
                    style={{
                        bottom: `${position}%`,
                        right: `${position}%`, 
                    }}>
                </div>
                <div 
                    className="circle circle--yellow" 
                    style={{
                        bottom: `${position}%`,
                        left: `${position}%`, 
                    }}>
                </div>
            </div>
        )
    }
}

export default Background;