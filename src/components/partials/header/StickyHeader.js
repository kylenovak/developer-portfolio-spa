import React, { Component } from 'react';
import './styles/stickyHeader.css';

class StickyHeader extends Component {
  render() {
    return (
      <div id="sticky-header" className={this.props.hide ? 'hidden' : ''}>
        {this.props.children}
      </div>
    );
  }
}

export default StickyHeader;
