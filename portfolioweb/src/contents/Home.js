import React, { Component } from 'react';
import profilepic from '../img/Procircle.png';
import Social from '../components/Social';
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render() {
        
        return (
            <div className="condiv home">
                <h1 className="topic">Wellcome to my Portfolio website</h1>
                <img src={profilepic} alt="profile" className="profilepic" />
                <ReactTypingEffect text={['I am Sedtanan', 'I am want to be Backend Developer']} speed={100} eraseDelay={200} className="typingeffect" />
                <Social />
            </div>
        );
    }
}

export default Home;