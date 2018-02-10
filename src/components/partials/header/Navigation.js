import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import { NavLink } from 'react-router-dom';
import './styles/navigation.css';

const scrollToHash = require('../../../services/scrollToHash');

class Navigation extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    this.history = createHistory();

    const hash = window.location.hash.split('#').slice(1).join('#');
    this.defaultNavId = null;
    if (hash) {
      this.defaultNavId = `nav-${hash}`;
    }
    else {
      this.defaultNavId = 'nav-home';
    }

    this.state = {
      navId: this.defaultNavId
    };

    this.unlisten = this.history.listen((location, action) => {
      let id = scrollToHash(location.hash);
      this.setActiveNavLink(id);
    });
  }

  componentDidMount() {
    document.getElementById(this.defaultNavId).classList.add('active');
  }

  componentWillUnmount() {
    this.unlisten();
  }

  handleClick(e) {
    let node = e.target;

    if (node.localName !== 'ul') {
      if (node.localName === 'i') {
        node = node.parentNode;
      }

      let id = scrollToHash(node.href);
      this.setActiveNavLink(id);
    }
  }

  setActiveNavLink(id) {
    let activeNavId = 'nav-home';
    if (id !== '') {
      activeNavId = `nav-${id}`;
    }

    this.setState((prevState, props) => {
      let prevNavId = prevState.navId ? prevState.navId : activeNavId;

      let prevNavLink = document.getElementById(prevNavId);
      let activeNavLink = document.getElementById(activeNavId);

      if (prevNavLink) {
        prevNavLink.classList.remove('active');
      }
      if (activeNavLink) {
        activeNavLink.classList.add('active');
      }

      return {navId: activeNavId};
    });
  }

  render() {
    return (
      <nav id="navigation">
        <ul className="flexbox-item flex-row container" onClick={this.handleClick}>
          <li id="nav-home" title="Home">
            <NavLink exact to="/"><i className="fas fa-home"></i> Home</NavLink>
          </li>
          <li id="nav-skills" title="My Technical Skills">
            <NavLink to="#skills"><i className="fas fa-chart-bar"></i> Skills</NavLink>
          </li>
          <li id="nav-experience" title="My Professional Experience">
            <NavLink to="#experience"><i className="fas fa-briefcase"></i> Experience</NavLink>
          </li>
          <li id="nav-education" title="My Education">
            <NavLink to="#education"><i className="fas fa-graduation-cap"></i> Education</NavLink>
          </li>
          <li id="nav-projects" title="My Personal Projects">
            <NavLink to="#projects"><i className="fas fa-keyboard"></i> Projects</NavLink>
          </li>
          <li id="nav-about" title="About Me">
            <NavLink to="#about"><i className="far fa-question-circle"></i> About</NavLink>
          </li>
          <li id="nav-contact" title="Contact Me">
            <NavLink to="#contact"><i className="far fa-envelope"></i> Contact</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
