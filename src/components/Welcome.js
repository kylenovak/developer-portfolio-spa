import React, { Component } from 'react';
import Social from './Social';
import PhotoAuthor from './PhotoAuthor';
import ScrollDown from './ScrollDown';
import '../styles/Welcome.css';

class Welcome extends Component {
  render() {
    return (
      <section className="App-welcome">
        <div className="flexbox-item fill-area flex-column">
          <p>Hi, I'm <span className="highlight" title="Software Engineer">Kyle</span>, a <strong>Software Engineer</strong> whose passion is <em>building software</em>.</p>
          <Social />
          <PhotoAuthor />
          <ScrollDown />
        </div>
      </section>
    );
  }
}

export default Welcome;
