import React, { Component } from 'react';

class SectionColumn extends Component {
  render() {
    return (
      <section className="flexbox-item fill-area flex-column container">
        {this.props.children}
      </section>
    );
  }
}

export default SectionColumn;
