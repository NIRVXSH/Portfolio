import React, { Component } from 'react'
import profilepic from '../img/Procircle.png'

class About extends Component {
    render() {
        return(
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1>
                <img src={profilepic} alt="profile" className="profilepic" />
                {/* <img src={profilepic} /> */}
                <h3>Hi, I'm Sedtanan Mosaleeyanon</h3>
                <p>I' Sedtanan Mosaleeyanon. You can call me Fook</p>
            </div>
        );
    }
}

export default About;