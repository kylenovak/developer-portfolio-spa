import React, { Component } from 'react';
import '../styles/ScrollDown.css';

class ScrollDown extends Component {
  render() {
    return (
      <span className="App-scroll-down" title="Scroll down">
        <i className="fas fa-angle-down"></i>
      </span>
    );
  }
}

export default ScrollDown;
