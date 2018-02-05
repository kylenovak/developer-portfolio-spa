import React, { Component } from 'react';
import '../styles/card.css';

class SkillCard extends Component {
  render() {
    return (
      <div className="card">
        <i className={`fas fa-${this.props.icon}`}></i>
        <h3>{this.props.skillName}</h3>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default SkillCard;
