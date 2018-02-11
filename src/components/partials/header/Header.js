import React, { Component } from 'react';
import Logo from './Logo';
import ConnectButton from './ConnectButton';

class Header extends Component {
  render() {
    return (
      <header id="header" className="header">
        <Logo />
        <ConnectButton />
      </header>
    );
  }
}

export default Header;
