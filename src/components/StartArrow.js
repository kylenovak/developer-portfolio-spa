import React, { Component } from 'react';
import '../styles/startArrow.css';
const scrollTo = require('../services/scrollTo');

class StartArrow extends Component {
  handleClick(e) {
    scrollTo('navigation');
  }

  render() {
    return (
      <span id="start-arrow" onClick={this.handleClick} title="Scroll down">
        <i className="fas fa-angle-down"></i>
      </span>
    );
  }
}

export default StartArrow;
