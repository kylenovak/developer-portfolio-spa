import React, { Component } from 'react';
import SectionHeader from './SectionHeader';
import SectionRow from './SectionRow';
import '../styles/education.css';

class Education extends Component {
  render() {
    return (
      <section id="education">
        <SectionHeader sectionTitle="Education" />

        <SectionRow>
          <a href="https://www.missouristate.edu/">
            <img id="msu" className="gray" src={require('../images/missouri_state_university.jpg')} title="Missouri State University" alt="Missouri State University" />
          </a>
        </SectionRow>
      </section>
    );
  }
}

export default Education;
