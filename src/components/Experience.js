import React, { Component } from 'react';
import SectionHeader from './SectionHeader';
import SectionRow from './SectionRow';
import Position from './Position';
import PositionImage from './PositionImage';
import PositionTools from './PositionTools';
import PositionDuration from './PositionDuration';
import '../styles/experience.css';

class Experience extends Component {
  render() {
    return (
      <section id="experience">
        <SectionHeader sectionTitle="Professional Experience" />
        <SectionRow>
          <Position title="Software Engineer" company="The Boeing Company">
            <PositionImage href="https://www.boeing.com" src="boeing.png" company="The Boeing Company" />
            <PositionTools>
              <li>C++</li>
              <li>Python</li>
              <li>Qt</li>
              <li>CMake</li>
            </PositionTools>
            <PositionDuration start="June 2017" end="Present" />
          </Position>
          <Position title="Software Developer" company="O'Reilly Auto Parts">
            <PositionImage href="https://www.oreillyauto.com" src="oreilly.png" company="O'Reilly Auto Parts" />
            <PositionTools>
              <li>Java</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>PostgreSQL</li>
              <li>SQL</li>
              <li>HTML</li>
              <li>CSS</li>
            </PositionTools>
            <PositionDuration start="May 2015" end="May 2017" />
          </Position>
          <Position title="Intern Software Developer" company="O'Reilly Auto Parts">
            <PositionImage href="https://www.oreillyauto.com" src="oreilly.png" company="O'Reilly Auto Parts" />
            <PositionTools>
              <li>Java</li>
              <li>JavaScript</li>
              <li>SQL</li>
              <li>HTML</li>
              <li>CSS</li>
            </PositionTools>
            <PositionDuration start="Nov 2014" end="May 2015" />
          </Position>
        </SectionRow>
      </section>
    );
  }
}

export default Experience;
