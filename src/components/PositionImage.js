import React, { Component } from 'react';
import Link from './Link';

class PositionImage extends Component {
  render() {
    return (
      <div className="img-wrapper">
        <Link href={this.props.href}>
          <img className="grayscale" src={require(`../images/${this.props.src}`)} title={this.props.company} alt={this.props.company} />
        </Link>
      </div>
    );
  }
}

export default PositionImage;
