import React, { Component } from 'react';
import SectionHeader from '../sections/SectionHeader';
import SectionRow from '../sections/SectionRow';
import SectionColumn from '../sections/SectionColumn';

import './styles/about.css';

class About extends Component {
  render() {
    return (
      <section id="about">
        <SectionHeader title="About Me" />
        <SectionRow>
          <SectionColumn>
            <p>
              Hello, my name is Kyle Novak. I am a software engineer and a full-stack web developer.
            </p>
            <p>
              I code for fun, as a hobby, in my free time. Building software is something I have a passion for.
            </p>
          </SectionColumn>
          <SectionColumn>
            <h3>Interests</h3>
            <ul>
              <li>Software Engineering</li>
              <li>Web/Mobile Apps</li>
              <li>JavaScript</li>
              <li>NodeJS</li>
              <li>Startups</li>
            </ul>
          </SectionColumn>
          <SectionColumn>
            <h3>Hobbies</h3>
            <ul>
              <li>Programming/Coding</li>
              <li>Developing Web Apps</li>
              <li>Reading and Writing</li>
              <li>Investing/Trading</li>
              <li>Exercising/Lifting</li>
            </ul>
          </SectionColumn>
        </SectionRow>
      </section>
    );
  }
}

export default About;
