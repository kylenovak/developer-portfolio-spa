import React, { Component } from 'react';
import '../styles/connectButton.css';
import LinkScroll from './LinkScroll';

class ConnectButton extends Component {
  render() {
    return (
      <span className="App-connect-button">
        <LinkScroll to="/contact" title="Connect with Kyle">
          <i className="far fa-comments"></i> Connect
        </LinkScroll>
      </span>
    );
  }
}

export default ConnectButton;
