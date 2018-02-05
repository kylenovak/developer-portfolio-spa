import React, { Component } from 'react';
import SectionHeader from './SectionHeader';
import SectionRow from './SectionRow';
import '../styles/experience.css';

class Experience extends Component {
  render() {
    return (
      <section id="experience">
        <SectionHeader sectionTitle="Professional Experience" />

        <SectionRow>
          <a href="https://www.oreillyauto.com">
            <img id="oreilly" className="gray" src={require('../images/oreilly.png')} title="O'Reilly Auto Parts" alt="O'Reilly Auto Parts" />
          </a>
          <a href="http://www.boeing.com">
            <img id="boeing" className="gray" src={require('../images/boeing.png')} title="The Boeing Company" alt="The Boeing Company" />
          </a>
        </SectionRow>


      </section>
    );
  }
}

export default Experience;
