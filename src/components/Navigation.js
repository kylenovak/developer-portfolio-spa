import React, { Component } from 'react';
import LinkScroll from './LinkScroll';

import '../styles/navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav id="navigation">
        <ul className="flexbox-item flex-row">
          <li title="Home">
            <LinkScroll exact to="/"><i className="fas fa-home"></i> Home</LinkScroll>
          </li>
          <li title="My Technical Skills">
            <LinkScroll to="/skills"><i className="fas fa-chart-pie"></i> Skills</LinkScroll>
          </li>
          <li title="My Professional Experience & Education">
            <LinkScroll to="/experience"><i className="fas fa-graduation-cap"></i> Experience</LinkScroll>
          </li>
          <li title="My Personal Projects">
            <LinkScroll to="/projects"><i className="fas fa-briefcase"></i> Projects</LinkScroll>
          </li>
          <li title="About Me">
            <LinkScroll to="/about"><i className="far fa-question-circle"></i> About</LinkScroll>
          </li>
          <li title="Contact Me">
            <LinkScroll to="/contact"><i className="far fa-envelope"></i> Contact</LinkScroll>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
