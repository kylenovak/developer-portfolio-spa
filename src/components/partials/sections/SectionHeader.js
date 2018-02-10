import React, { Component } from 'react';
import './styles/sectionHeader.css';

class SectionHeader extends Component {
  render() {
    return (
      <header className="flexbox-item flex-row container section-header">
        <h2><span><i className="fas fa-hashtag"></i> {this.props.sectionTitle}</span></h2>
      </header>
    );
  }
}

export default SectionHeader;
