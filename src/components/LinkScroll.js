import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class LinkScroll extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  scrollTo(hash) {
    let element = document.getElementById(hash);
    if (element !== null) {
      element.scrollIntoView({behavior: "smooth"});
    }
    else {
      // Scroll to to the top, i.e. 'home'
      element = document.getElementById('home');
      element.scrollIntoView({behavior: "smooth"});
    }
  }

  handleClick(e) {
    let hash = this.props.to.split('/').slice(1).join('/');
    this.scrollTo(hash);
  }

  render() {
    return (
      <NavLink {...this.props} onClick={this.handleClick} activeClassName="active">
        {this.props.children}
      </NavLink>
    );
  }
}

export default LinkScroll;
