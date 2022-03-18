import './Contact.css';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Button } from 'react-bootstrap';

class Contact extends React.Component {
    render() {
        return (
            <div className='Contact'>
                <Button href='https://twitter.com/studios_vance' variant="outline-info"><FontAwesomeIcon icon={faTwitter} /></Button>{' '}
                <Button href='mailto:v4ncstudios@gmail.com' variant="outline-danger"><FontAwesomeIcon icon={faGoogle} /></Button>{' '}
            </div>
        );
    }
}



export default Contact;