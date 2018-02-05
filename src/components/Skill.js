import React, { Component } from 'react';
import SkillName from './SkillName';
import SkillBar from './SkillBar';
import '../styles/skillBar.css';

class Skill extends Component {
  render() {
    return (
      <li>
        <SkillName name={this.props.name} />
        <SkillBar level={this.props.level} />
      </li>
    );
  }
}

export default Skill;
