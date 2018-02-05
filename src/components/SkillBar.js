import React, { Component } from 'react';

class SkillBar extends Component {
  render() {
    return (
      <span className="skill-bar-wrapper">
        <span className="skill-bar" style={{width: `${this.props.level}%`}}></span>
        <span className="skill-bar-level">{this.props.level} / 100 </span>
      </span>
    );
  }
}

export default SkillBar;
