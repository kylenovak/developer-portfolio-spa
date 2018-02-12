import React, { Component } from 'react';
import './styles/sectionHeader.css';

class SectionHeader extends Component {
  render() {
    return (
      <header className="section-header flexbox-item flex-row container">
        <h2><span><i className="fas fa-hashtag"></i> {this.props.title}</span></h2>
      </header>
    );
  }
}

export default SectionHeader;
