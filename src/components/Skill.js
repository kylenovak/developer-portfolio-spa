import React, { Component } from 'react';
import '../styles/skill.css';

class Skill extends Component {
  render() {
    return (
      <div className="App-skill">
        <i className={`fas fa-${this.props.icon}`}></i>
        <h3>{this.props.title}</h3>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Skill;
