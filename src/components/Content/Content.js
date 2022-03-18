import './Content.css';
import React from 'react';

class Content extends React.Component {
    render() {
        return (
            <div className='Content'>
                <img className='Content-Img' src={this.props.image} />
                <h3>{this.props.title}</h3>
                <p>{this.props.type}</p>
            </div>
        );
    }
}



export default Content;