import React, { Component } from 'react';
import './styles/menuToggle.css';

class MenuToggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuToggleOn: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleStickyNavClick = this.handleStickyNavClick.bind(this);
  }

  handleStickyNavClick(e) {
    this.setState({menuToggleOn: false});
  }

  componentDidMount() {
    this.stickyNav = document.getElementById('navigation-sticky');
    this.stickyNav.addEventListener('click', this.handleStickyNavClick);
  }

  componentWillUnmount() {
    this.stickyNav.removeEventListener('click', this.handleStickyNavClick);
  }

  handleClick(e) {
    this.setState((prevState, props) => {
      if (prevState.menuToggleOn) {
        this.stickyNav.classList.remove('show');
      }
      else {
        this.stickyNav.classList.add('show');
      }

      return {
        menuToggleOn: !prevState.menuToggleOn
      };
    });
  }

  render() {
    return (
      <button title="Menu"
        onClick={this.handleClick}
        className={`menu-toggle ${this.state.menuToggleOn ? 'animate' : ''}`}>
        <span className="menu-bar top"></span>
        <span className="menu-bar middle"></span>
        <span className="menu-bar bottom"></span>
      </button>
    );
  }
}

export default MenuToggle;
