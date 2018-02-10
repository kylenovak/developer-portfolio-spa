import React, { Component } from 'react';

class SliderCardLabel extends Component {
  render() {
    return (
      <span className="slider-card-label"><span>{this.props.children}</span></span>
    );
  }
}

export default SliderCardLabel;
