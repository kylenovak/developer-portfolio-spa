import React, { Component } from 'react';

class Link extends Component {
  render() {
    return (
      <a href={this.props.href} title={this.props.title} rel="noopener noreferrer" target="_blank">
        {this.props.children}
      </a>
    );
  }
}

export default Link;
