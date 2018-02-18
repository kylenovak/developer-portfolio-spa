import React, { Component } from 'react';
import SliderArrow from './SliderArrow';
import './styles/slider.css';

class Slider extends Component {

  constructor(props) {
    super(props);

    this.leftArrowCounter = 0;
    this.rightArrowCounter = 0;

    this.state = {
      sliderLeft: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset(e) {
    this.setState({sliderLeft: 0});
    this.leftArrowCounter = 0;
    this.rightArrowCounter = 0;
  }

  componentDidMount() {
    this.numberOfSliderItems = 0;
    for (let i = 0; i < this.props.children.length; i++) {
      if (typeof this.props.children[i] !== 'string') {
        this.numberOfSliderItems += 1;
      }
    }
    this.sliderCard = document.getElementsByClassName('slider-card-wrapper')[0];

    window.addEventListener('resize', this.reset);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.reset);
  }

  handleClick(e) {
    let isLeftArrow = e.target.classList.contains('left');

    this.setState((prevState, props) => {
      let left = 0;
      let numberOfVisibleItems = 3;
      let marginOffset = 24;

      if (this.numberOfSliderItems > numberOfVisibleItems) {
        if (isLeftArrow) {
          if (this.leftArrowCounter < this.numberOfSliderItems - numberOfVisibleItems) {
            left = prevState.sliderLeft - this.sliderCard.clientWidth - marginOffset;
          }
          else {
            left = prevState.sliderLeft;
          }

          if (this.leftArrowCounter < this.numberOfSliderItems - numberOfVisibleItems) {
            this.leftArrowCounter += 1;
          }

          this.rightArrowCounter = this.rightArrowCounter > 0 ? this.rightArrowCounter - 1 : 0;
        }
        else {
          if (this.leftArrowCounter > 0) {
            if (this.rightArrowCounter < this.numberOfSliderItems - numberOfVisibleItems) {
              left = prevState.sliderLeft + this.sliderCard.clientWidth + marginOffset;
            }
            else {
              left = prevState.sliderLeft;
            }

            if (this.rightArrowCounter < this.numberOfSliderItems - numberOfVisibleItems) {
              this.rightArrowCounter += 1;
            }

            this.leftArrowCounter = this.leftArrowCounter > 0 ? this.leftArrowCounter - 1 : 0;
          }
        }
      }

      return { sliderLeft: left };
    });
  }

  render() {
    return (
      <div className="slider">
        <SliderArrow direction="left" clickHandler={this.handleClick} />
        <SliderArrow direction="right" clickHandler={this.handleClick} />
        <div className="slider-content fill-area"
          style={{left: this.state.sliderLeft}}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Slider;
