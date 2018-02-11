import React, { Component } from 'react';
import './styles/startArrow.css';
const scrollToHash = require('../../../services/scrollToHash');

class StartArrow extends Component {
  render() {
    return (
      <span id="start-arrow">
        <span onClick={() => scrollToHash('#navigation')} title="Scroll down">
          <i className="fas fa-angle-down"></i>
        </span>
      </span>
    );
  }
}

export default StartArrow;
