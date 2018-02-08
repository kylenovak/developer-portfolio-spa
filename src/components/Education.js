import React, { Component } from 'react';
import SectionHeader from './SectionHeader';
import SectionRow from './SectionRow';
import Link from './Link';
import '../styles/education.css';

class Education extends Component {
  render() {
    return (
      <section id="education">
        <SectionHeader sectionTitle="Education" />
        <SectionRow>
          <Link href="https://www.missouristate.edu/">
            <img id="msu" className="gray" src={require('../images/missouri_state_university.png')} title="Missouri State University" alt="Missouri State University" />
          </Link>
        </SectionRow>
      </section>
    );
  }
}

export default Education;
