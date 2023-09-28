import React, { Component } from 'react'
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="EnET-C" where="KING MONKUT UNIVERSITY TECHNOLOGY OF NORTH" from="2020" to="Present" />
                <Widecard title="Math-Sci  STEM" where="Horwang School" from="2011" to="2016" />
            </div>
        );
    }
}

export default Education;