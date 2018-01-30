import React, { Component } from 'react';
import Introduction from './Introduction';
import Social from './Social';
import PhotoAuthor from './PhotoAuthor';
import StartArrow from './StartArrow';
import '../styles/welcome.css';

class Welcome extends Component {
  render() {
    return (
      <section className="App-welcome">
        <div className="flexbox-item fill-area flex-column">
          <Introduction />
          <Social />
          <PhotoAuthor />
          <StartArrow />
        </div>
      </section>
    );
  }
}

export default Welcome;
