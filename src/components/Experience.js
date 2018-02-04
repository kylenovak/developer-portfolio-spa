import React, { Component } from 'react';
import '../styles/experience.css';

class Experience extends Component {
  render() {
    return (
      <section id="experience">
        <div className="header-wrapper">
          <header className="flexbox-item flex-row">
            <h2><span className="caret"><span className="caret-inset"></span></span><i className="fas fa-hashtag"></i> Professional Experience</h2>
          </header>
        </div>
        <a href="https://www.oreillyauto.com">
          <img id="oreilly" src={require('../images/oreilly.jpg')} title="O'Reilly Auto Parts" alt="O'Reilly Auto Parts" />
        </a>
        <a href="http://www.boeing.com">
          <img id="boeing" src={require('../images/boeing.jpg')} title="The Boeing Company" alt="The Boeing Company" />
        </a>

      </section>
    );
  }
}

export default Experience;
