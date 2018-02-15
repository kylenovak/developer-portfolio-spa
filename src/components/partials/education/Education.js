import React, { Component } from 'react';
import SectionHeader from '../sections/SectionHeader';
import SectionRow from '../sections/SectionRow';
import Link from '../links/Link';
import './styles/education.css';

class Education extends Component {
  render() {
    return (
      <section id="education">
        <SectionHeader title="Education" />
        <SectionRow classes="education-columns">
          <div className="education-wrapper">
            <div className="col">
              <h3>Missouri State University</h3>
              <Link href="https://www.missouristate.edu/">
                <img className="grayscale" src={require('../../../images/missouri_state_university.png')} title="Missouri State University" alt="Missouri State University" />
              </Link>
              <p className="education-degree">Bachelor of Science - BS, Computer Science; Minor, Mathematics</p>
            </div>
          </div>
          <div className="education-wrapper">
            <div className="col">
              <h4>Achievements & Honors</h4>
              <ul className="education-stats">
                <li>Major GPA: 3.50</li>
                <li>Cummulative GPA: 3.30</li>
                <li>Phi Eta Sigma National Honor Society</li>
                <li>Missouri State University Dean's List</li>
              </ul>
            </div>
          </div>
          <div className="education-wrapper">
            <div className="col">
              <h4>Courses Completed</h4>
              <ul className="dual-col-list">
                <li>Algorithms</li>
                <li>Data Structures</li>
                <li>Operating Systems</li>
                <li>Software Engineering</li>
                <li>Computer Architecture</li>
                <li>Computer Graphics</li>
                <li>Computer Networking</li>
                <li>Computational Thinking</li>
                <li>Languages and Machines</li>
                <li>Database System Concepts</li>
                <li>Internet Programming</li>
                <li>Application Development</li>
                <li>Discrete Mathematics</li>
                <li>Calculus I & II</li>
              </ul>
            </div>
          </div>
        </SectionRow>
      </section>
    );
  }
}

export default Education;
