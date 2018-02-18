import React, { Component } from 'react';
import './styles/sliderArrow.css';

class SliderArrow extends Component {
  render() {
    return (
      <div onClick={this.props.clickHandler} className={`slider-arrow ${this.props.direction}`}></div>
    );
  }
}

export default SliderArrow;
