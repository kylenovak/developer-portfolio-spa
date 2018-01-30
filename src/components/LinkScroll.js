import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
const scrollTo = require('../services/scrollTo');

class LinkScroll extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let hash = this.props.to.split('/').slice(1).join('/');
    (hash === '') ? scrollTo('header') : scrollTo(hash);
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
