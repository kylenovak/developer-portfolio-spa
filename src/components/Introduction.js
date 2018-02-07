import React, { Component } from 'react';
import '../styles/introduction.css';

class Introduction extends Component {
  render() {
    return (
      <p id="introduction">Hi, I'm <span title="Software Engineer">Kyle</span>, a <strong>Software Engineer</strong> with a passion for building <em>cool</em> "stuff."</p>
    );
  }
}

export default Introduction;
