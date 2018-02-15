import React, { Component } from 'react';
import './styles/menuToggle.css';

class MenuToggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuToggleOn: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((prevState, props) => {
      return {
        menuToggleOn: !prevState.menuToggleOn
      };
    });
  }

  render() {
    return (
      <button id="menu-toggle" title="Menu" onClick={this.handleClick} className={this.state.menuToggleOn ? 'animate' : ''}>
        <span id="menu-bar-top" className="menu-bar"></span>
        <span id="menu-bar-middle" className="menu-bar"></span>
        <span id="menu-bar-bottom" className="menu-bar"></span>
      </button>
    );
  }
}

export default MenuToggle;
