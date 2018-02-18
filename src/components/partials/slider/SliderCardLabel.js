import React, { Component } from 'react';
import './styles/sliderCardLabel.css';

class SliderCardLabel extends Component {
  render() {
    return (
      <span className="slider-card-label"><span>{this.props.children}</span></span>
    );
  }
}

export default SliderCardLabel;
