import React, { Component } from 'react';

class SliderCardLabel extends Component {
  render() {
    return (
      <span className="slider-card-label"><span>{this.props.text}</span></span>
    );
  }
}

export default SliderCardLabel;
