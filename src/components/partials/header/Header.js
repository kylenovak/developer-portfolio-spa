import React, { Component } from 'react';
import Logo from './Logo';
import ConnectButton from './ConnectButton';
import Welcome from './Welcome';
import Navigation from './Navigation';

class Header extends Component {
  render() {
    return (
      <header id="header" className="header">
        <Logo />
        <ConnectButton />
        <Welcome />
        <Navigation />
      </header>
    );
  }
}

export default Header;
