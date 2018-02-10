import React, { Component } from 'react';

class SliderCardList extends Component {
  render() {
    return (
      <div>
        <h5>{this.props.title}</h5>
        <ul>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

export default SliderCardList;
