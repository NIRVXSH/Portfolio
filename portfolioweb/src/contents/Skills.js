import React, { Component } from 'react';

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myskills: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'PHP', 'SQL', 'Dart'],
      myFramework: ['Flutter']
    };
  }

  render() {
    return (
      <div className="condiv skills">
        <h1 className="subtopic">My Skills</h1>
        <ul className="skills-list">
          {this.state.myskills.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </ul>
        <h1 className="subtopic">My Framework</h1>
        <ul className="framework-list">
          {this.state.myFramework.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Skills;
