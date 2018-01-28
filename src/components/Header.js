import React, { Component } from 'react';
import Welcome from './Welcome';
import Navigation from './Navigation';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="background-img"></div>
        <div className="content header-content">
          <h1><span>Kyle</span> Joseph <span>Novak</span></h1>
          <Welcome />
          <Navigation />
        </div>
      </header>
    );
  }
}

export default Header;
