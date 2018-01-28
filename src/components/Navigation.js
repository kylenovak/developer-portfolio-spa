import React, { Component } from 'react';
import LinkScroll from './LinkScroll';

import '../styles/Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav className="App-navigation">
        <ul className="flexbox-item flex-row">
          <li><LinkScroll exact to="/"><i className="fas fa-home"></i> Home</LinkScroll></li>
          <li><LinkScroll to="/skills"><i className="fas fa-chart-pie"></i> Skills</LinkScroll></li>
          <li><LinkScroll to="/experience"><i className="fas fa-graduation-cap"></i> Experience</LinkScroll></li>
          <li><LinkScroll to="/projects"><i className="fas fa-briefcase"></i> Projects</LinkScroll></li>
          <li><LinkScroll to="/about"><i className="far fa-question-circle"></i> About</LinkScroll></li>
          <li><LinkScroll to="/contact"><i className="far fa-envelope"></i> Contact</LinkScroll></li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
