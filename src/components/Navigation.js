import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav className="App-navigation">
        <ul className="flexbox-item flex-row">
          <li><NavLink to="/" activeClassName="active"><i class="fas fa-home"></i> Home</NavLink></li>
          <li><NavLink to="/#skills" activeClassName="active"><i class="fas fa-chart-pie"></i> Skills</NavLink></li>
          <li><NavLink to="/#experience" activeClassName="active"><i class="fas fa-graduation-cap"></i> Experience</NavLink></li>
          <li><NavLink to="/#projects" activeClassName="active"><i class="fas fa-briefcase"></i> Projects</NavLink></li>
          <li><NavLink to="/#about" activeClassName="active"><i class="far fa-question-circle"></i> About</NavLink></li>
          <li><NavLink to="/#contact" activeClassName="active"><i class="far fa-envelope"></i> Contact</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
