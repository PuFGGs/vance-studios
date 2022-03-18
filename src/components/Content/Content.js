import './Content.css';
import React from 'react';
import { ProgressBar } from 'react-bootstrap';

class Content extends React.Component {
    render() {
        var progress = this.props.progress;
        var progressbool = this.props.progress > 0;
        var progressBar = <ProgressBar animated now={progress}  />
        
        return (
            <div className='Content noselect'>
                <img className='Content-Img' alt='Image' src={this.props.image} style={{ borderRadius: this.props.borderRadius || '0px' }} />
                <h3>{this.props.title}</h3>
                <p>{this.props.type}</p>
                {progressbool ? (progressBar) : null}
            </div>
        );
    }
}



export default Content;