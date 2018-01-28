import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav className="App-navigation">
        <ul className="flexbox-item flex-row">
          <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/#skills" activeClassName="active">Skills</NavLink></li>
          <li><NavLink to="/#experience" activeClassName="active">Experience</NavLink></li>
          <li><NavLink to="/#projects" activeClassName="active">Projects</NavLink></li>
          <li><NavLink to="/#about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/#contact" activeClassName="active">Contact</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
