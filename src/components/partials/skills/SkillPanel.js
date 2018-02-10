import React, { Component } from 'react';
import './styles/skillPanel.css';

class SkillPanel extends Component {
  render() {
    return (
      <div className="panel">
        <h3>{this.props.panelName}</h3>
        <ul>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

export default SkillPanel;
