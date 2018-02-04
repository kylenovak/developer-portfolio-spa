import React, { Component } from 'react';
import '../styles/education.css';

class Education extends Component {
  render() {
    return (
      <section id="education">
        <div className="header-wrapper">
          <header className="flexbox-item flex-row">
            <h2><span className="caret"><span className="caret-inset"></span></span><i className="fas fa-hashtag"></i> Education</h2>
          </header>
        </div>
        <a href="https://www.missouristate.edu/">
          <img id="msu" src={require('../images/missouri_state_university.jpg')} title="Missouri State University" alt="Missouri State University" />
        </a>
      </section>
    );
  }
}

export default Education;
