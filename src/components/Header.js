import React, { Component } from 'react';
import Welcome from './Welcome';
import Navigation from './Navigation';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <header id="header" className="App-header">
        <div className="content header-content">
          <h1 id="title">
            Kyle <span>Joseph</span> Novak
          </h1>
          <Welcome />
          <Navigation />
        </div>
      </header>
    );
  }
}

export default Header;
