import React, { Component } from 'react';

class SectionRow extends Component {
  render() {
    return (
      <section className="section-row flexbox-item fill-area flex-row container">
        {this.props.children}
      </section>
    );
  }
}

export default SectionRow;
