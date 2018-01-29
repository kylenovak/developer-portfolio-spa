import React, { Component } from 'react';
import LinkScroll from './LinkScroll';
import '../styles/ScrollDown.css';

class ScrollDown extends Component {
  render() {
    return (
      <LinkScroll to="/skills">
        <span className="App-scroll-down" title="Scroll down">
          <i className="fas fa-angle-down"></i>
        </span>
      </LinkScroll>
    );
  }
}

export default ScrollDown;
