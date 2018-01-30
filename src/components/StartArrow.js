import React, { Component } from 'react';
import LinkScroll from './LinkScroll';
import '../styles/startArrow.css';
const scrollTo = require('../services/scrollTo');

class StartArrow extends Component {
  handleClick(e) {
    scrollTo('nav');
  }

  render() {
    return (
      <span className="App-scroll-down" onClick={this.handleClick} title="Scroll down">
        <i className="fas fa-angle-down"></i>
      </span>
    );
  }
}

export default StartArrow;
