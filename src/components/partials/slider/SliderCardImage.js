import React, { Component } from 'react';
import Link from '../links/Link';

class SliderCardImage extends Component {
  render() {
    return (
      <div className="img-wrapper">
        <Link href={this.props.href}>
          <img className="grayscale" src={require(`../../../images/${this.props.src}`)} title={this.props.subTitle} alt={this.props.subTitle} />
        </Link>
      </div>
    );
  }
}

export default SliderCardImage;
