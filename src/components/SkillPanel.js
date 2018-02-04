import React, { Component } from 'react';
import '../styles/skillPanel.css';

class SkillPanel extends Component {
  render() {
    return (
      <div className="skill-panel">
        <h3>{this.props.panelName}</h3>
        {this.props.children}
      </div>
    );
  }
}

export default SkillPanel;
