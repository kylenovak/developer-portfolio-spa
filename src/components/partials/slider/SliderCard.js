import React, { Component } from 'react';
import './styles/sliderCard.css';

class SliderCard extends Component {
  render() {
    return (
      <div className="slider-card-wrapper">
        <h3>{this.props.title}</h3>
        <div className="slider-card">
          <h4>{this.props.subTitle}</h4>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default SliderCard;
