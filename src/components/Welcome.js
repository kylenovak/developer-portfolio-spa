import React, { Component } from 'react';
import Introduction from './Introduction';
import Social from './Social';
import PhotoAttribution from './PhotoAttribution';
import StartArrow from './StartArrow';
import '../styles/welcome.css';

class Welcome extends Component {
  render() {
    return (
      <section id="welcome">
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

export default Welcome;
