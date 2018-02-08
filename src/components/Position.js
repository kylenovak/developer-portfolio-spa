import React, { Component } from 'react';

class Position extends Component {
  render() {
    return (
      <div className="position-wrapper">
        <h3>{this.props.title}</h3>
        <div className="position">
          <h4>{this.props.company}</h4>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Position;
