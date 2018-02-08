import React, { Component } from 'react';
import '../styles/skillName.css';

class SkillName extends Component {
  render() {
    return (
      <span className="skill-name">
        <i className="far fa-check-square"></i>{` ${this.props.name} `}
      </span>
    );
  }
}

export default SkillName;
