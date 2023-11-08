import React, { Component } from 'react';
import profilepic from '../img/Procircle.png';
import Social from '../components/Social';
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render() {
        
        return (
            <div className="condiv home">
            <h1>Welcome to My Portfolio</h1>
                <img src={profilepic} alt="profile" className="profilepic" />
                
                <div className='h1lamp'>
                    <span>I</span>M<span>SEDTANAN</span>
                    
                    </div>
                     <ReactTypingEffect text={['I want to be Backend Developer']} speed={100} eraseDelay={200} className="typingeffect" /> 
                <Social />
            </div>
        );
    }
}

export default Home;