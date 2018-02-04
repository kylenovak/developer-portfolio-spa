import React, { Component } from 'react';
import '../styles/connectButton.css';
const scrollToHash = require('../services/scrollToHash');

class ConnectButton extends Component {
  render() {
    return (
      <button id="connect-button" onClick={() => scrollToHash('#contact')} title="Connect with Kyle">
        <i className="far fa-comments"></i> Connect
      </button>
    );
  }
}

export default ConnectButton;
