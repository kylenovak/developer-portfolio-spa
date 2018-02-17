import React, { Component } from 'react';
import './styles/upArrow.css';
const scrollToHash = require('../../../services/scrollToHash');

class UpArrow extends Component {
  render() {
    return (
      <span id="up-arrow"
        className={this.props.hide ? 'hide' : 'show'}
        onClick={() => scrollToHash('#app')} title="Sroll up">
        <i className="fas fa-angle-up"></i>
      </span>
    );
  }
}

export default UpArrow;
