import React, { Component } from 'react';

class PositionTools extends Component {
  render() {
    return (
      <div>
        <h5>Tools & Technologies</h5>
        <ul>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

export default PositionTools;
