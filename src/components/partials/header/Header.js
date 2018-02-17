import React, { Component } from 'react';
import Logo from './Logo';
import MenuToggle from './MenuToggle';
import ConnectButton from './ConnectButton';
import './styles/header.css';

class Header extends Component {
  render() {
    return (
      <header id={`header-${this.props.uniqueHeaderIdSuffix}`}>
        <MenuToggle />
        <Logo />
        <ConnectButton />
      </header>
    );
  }
}

export default Header;
