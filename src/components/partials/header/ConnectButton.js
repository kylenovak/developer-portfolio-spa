import React, { Component } from 'react';
import './styles/connectButton.css';
const scrollToHash = require('../../../services/scrollToHash');

class ConnectButton extends Component {
  render() {
    return (
      <button className="connect-button"
        title="Connect with Kyle"
        onClick={() => scrollToHash('#contact')}
      >
        <i className="far fa-comments"></i> Connect
      </button>
    );
  }
}

export default ConnectButton;
