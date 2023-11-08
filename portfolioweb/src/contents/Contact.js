import React, { Component } from 'react';
import Social from '../components/Social';
import ContactCard from '../components/ContactCard';

class Contact extends Component {
    render() {
        
        return (
            <div className="condiv">
                 <h1 className="subtopic">Contact</h1>
                 <ContactCard/>
                <Social />
            </div>
        );
    }
}

export default Contact;
