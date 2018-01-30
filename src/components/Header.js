import React, { Component } from 'react';
import Logo from './Logo';
import ConnectButton from './ConnectButton';
import Welcome from './Welcome';
import Navigation from './Navigation';
import LinkScroll from './LinkScroll';
import '../styles/header.css';

class Header extends Component {
  render() {
    return (
      <header id="header" className="App-header">
        <Logo />
        <ConnectButton />
        <Welcome />
        <Navigation />
      </header>
    );
  }
}

export default Header;
