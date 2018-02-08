import React, { Component } from 'react';

class PositionDuration extends Component {
  render() {
    return (
      <span className="position-duration"><span>{this.props.start} - {this.props.end}</span></span>
    );
  }
}

export default PositionDuration;
