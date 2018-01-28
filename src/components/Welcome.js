import React, { Component } from 'react';
import Social from './Social';
import '../styles/Welcome.css';

class Welcome extends Component {
  render() {
    return (
      <section className="App-welcome">
        <div className="flexbox-item fill-area flex-column">
          <p>Hi, I'm <span>Kyle</span>, a <strong>Software Engineer</strong> whose passion is <em>building software</em>.</p>
          <Social linkedinButtonText="Connect with Kyle" twitterButtonText="Follow Kyle" />
        </div>
      </section>
    );
  }
}

export default Welcome;
