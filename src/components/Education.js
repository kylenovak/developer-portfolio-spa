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
          <div className="education-wrapper">
            <div className="col">
              <h3>Missouri State University</h3>
              <Link href="https://www.missouristate.edu/">
                <img className="grayscale" src={require('../images/missouri_state_university.png')} title="Missouri State University" alt="Missouri State University" />
              </Link>
              <p>Bachelor of Science - BS, Computer Science; Minor, Mathematics</p>
            </div>
          </div>
          <div className="education-wrapper">
            <div className="col">
              <h4>Courses Completed</h4>
              <ul>
                <li>Math</li>
                <li>Programming</li>
                <li>Computer Science</li>
                <li>Software Engineering</li>
                <li>Calculus II</li>
              </ul>
            </div>
          </div>
          <div className="education-wrapper">
            <div className="col">
              <h4>Achievements & Honors</h4>
              <ul>
                <li>Major GPA: 3.50</li>
                <li>Cummulative GPA: 3.30</li>
                <li>Phi Eta Sigma National Honor Society</li>
                <li>Missouri State University Dean's List</li>
              </ul>
            </div>
          </div>
        </SectionRow>
      </section>
    );
  }
}

export default Education;
