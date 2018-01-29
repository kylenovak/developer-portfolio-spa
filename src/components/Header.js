import React, { Component } from 'react';
import Welcome from './Welcome';
import Navigation from './Navigation';
import LinkScroll from './LinkScroll';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <header id="header" className="App-header">
        <div className="content header-content">
          <h1 id="logo">
            <LinkScroll to="/" title="Kyle J. Novak">
              Kyle <span>Joseph</span> Novak
            </LinkScroll>
          </h1>
          <span id="connect">
            <LinkScroll to="/contact" title="Connect with Kyle">
              <i className="far fa-comments"></i> Connect
            </LinkScroll>
          </span>
          <Welcome />
          <Navigation />
        </div>
      </header>
    );
  }
}

export default Header;
