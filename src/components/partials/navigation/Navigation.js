import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import { NavLink } from 'react-router-dom';
import './styles/navigation.css';

const scrollToHash = require('../../../services/scrollToHash');

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.history = createHistory();

    this.hash = window.location.hash.split('#').slice(1).join('#');

    this.unlisten = this.history.listen((location, action) => {
      let id = scrollToHash(location.hash);
      this.setActiveNavLink(id);
    });
  }

  componentDidMount() {
    this.stickyNav = document.getElementById('navigation-sticky');
    this.staticNav = document.getElementById('navigation-static');

    this.setActiveNavLink(this.hash);
  }

  componentWillUnmount() {
    this.unlisten();
  }

  handleClick(e) {
    let node = e.target;

    if (node.localName !== 'ul') {
      if (node.localName === 'span') {
        node = node.parentNode;
      }
      if (node.localName === 'i') {
        node = node.parentNode;
        if (node.localName === 'span') {
          node = node.parentNode;
        }
      }

      this.stickyNav.classList.remove('show');

      let id = scrollToHash(node.href);
      this.setActiveNavLink(id);
    }
  }

  setActiveNavLink(id) {
    id = (id === '') ? 'home' : id;
    this.syncActiveNavIds(`nav-${id}-static`);
  }

  syncActiveNavIds(id) {
    let staticNavItems = this.staticNav.children[0].children;
    let stickyNavItems = this.stickyNav.children[0].children;

    for (let i = 0; i < staticNavItems.length; i++) {
      if (staticNavItems[i].id === id) {
        staticNavItems[i].classList.add('active');
        stickyNavItems[i].classList.add('active');
      }
      else {
        staticNavItems[i].classList.remove('active');
        stickyNavItems[i].classList.remove('active');
      }
    }
  }

  render() {
    return (
      <nav id={`navigation-${this.props.uniqueNavIdSuffix}`} className="navigation">
        <ul className="flexbox-item flex-row container" onClick={this.handleClick}>
          <li id={`nav-home-${this.props.uniqueNavIdSuffix}`} title="Home">
            <NavLink exact to="/">
              <span className={'home' === this.props.activeNavHash ? 'highlight' : ''}>
                <i className="fas fa-home"></i> Home
              </span>
            </NavLink>
          </li>
          <li id={`nav-skills-${this.props.uniqueNavIdSuffix}`} title="My Technical Skills">
            <NavLink to="#skills">
              <span className={'skills' === this.props.activeNavHash ? 'highlight' : ''}>
                <i className="fas fa-chart-bar"></i> Skills
              </span>
            </NavLink>
          </li>
          <li id={`nav-experience-${this.props.uniqueNavIdSuffix}`} title="My Professional Experience">
            <NavLink to="#experience">
              <span className={'experience' === this.props.activeNavHash ? 'highlight' : ''}>
                <i className="fas fa-briefcase"></i> Experience
              </span>
            </NavLink>
          </li>
          <li id={`nav-education-${this.props.uniqueNavIdSuffix}`} title="My Education">
            <NavLink to="#education">
              <span className={'education' === this.props.activeNavHash ? 'highlight' : ''}>
                <i className="fas fa-graduation-cap"></i> Education
              </span>
            </NavLink>
          </li>
          <li id={`nav-projects-${this.props.uniqueNavIdSuffix}`} title="My Personal Projects">
            <NavLink to="#projects">
              <span className={'projects' === this.props.activeNavHash ? 'highlight' : ''}>
                <i className="fas fa-keyboard"></i> Projects
              </span>
            </NavLink>
          </li>
          <li id={`nav-about-${this.props.uniqueNavIdSuffix}`} title="About Me">
            <NavLink to="#about">
              <span className={'about' === this.props.activeNavHash ? 'highlight' : ''}>
                <i className="far fa-question-circle"></i> About
              </span>
            </NavLink>
          </li>
          <li id={`nav-contact-${this.props.uniqueNavIdSuffix}`} title="Contact Me">
            <NavLink to="#contact">
              <span className={'contact' === this.props.activeNavHash ? 'highlight' : ''}>
                <i className="far fa-envelope"></i> Contact
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
