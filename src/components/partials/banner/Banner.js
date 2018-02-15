import React, { Component } from 'react';
import Introduction from './Introduction';
import Social from './Social';
import PhotoAttribution from './attribution/PhotoAttribution';
import StartArrow from './StartArrow';
import './styles/banner.css';

class Banner extends Component {
  render() {
    return (
      <section id="banner">
        <div className="content flexbox-item fill-area flex-column">
          <Introduction />
          <Social />
          <PhotoAttribution />
          <StartArrow />
        </div>
      </section>
    );
  }
}

export default Banner;
