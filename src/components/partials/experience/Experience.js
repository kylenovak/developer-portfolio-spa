import React, { Component } from 'react';
import SectionHeader from '../sections/SectionHeader';
import SectionRow from '../sections/SectionRow';
import SliderCard from '../slider/SliderCard';
import SliderCardImage from '../slider/SliderCardImage';
import SliderCardList from '../slider/SliderCardList';
import SliderCardLabel from '../slider/SliderCardLabel';
import '../slider/styles/sliderCard.css';
import './styles/experience.css';

class Experience extends Component {
  render() {
    return (
      <section id="experience">
        <SectionHeader title="Professional Experience" />
        <SectionRow>
          <SliderCard title="Software Engineer" subTitle="The Boeing Company">
            <SliderCardImage href="https://www.boeing.com" src="boeing.png" subTitle="The Boeing Company" />
            <SliderCardList title="Tools & Technologies">
              <li>C++</li>
              <li>Python</li>
              <li>Qt</li>
              <li>CMake</li>
            </SliderCardList>
            <SliderCardLabel>June 2017 - Present</SliderCardLabel>
          </SliderCard>
          <SliderCard title="Full-stack Software Developer" subTitle="O'Reilly Auto Parts">
            <SliderCardImage href="https://www.oreillyauto.com" src="oreilly.png" subTitle="O'Reilly Auto Parts" />
            <SliderCardList title="Tools & Technologies">
              <li>Java</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>PostgreSQL</li>
              <li>SQL</li>
              <li>HTML</li>
              <li>CSS</li>
            </SliderCardList>
            <SliderCardLabel>May 2015 - May 2017</SliderCardLabel>
          </SliderCard>
          <SliderCard title="Intern Software Developer" subTitle="O'Reilly Auto Parts">
            <SliderCardImage href="https://www.oreillyauto.com" src="oreilly.png" subTitle="O'Reilly Auto Parts" />
            <SliderCardList title="Tools & Technologies">
              <li>Java</li>
              <li>JavaScript</li>
              <li>SQL</li>
              <li>HTML</li>
              <li>CSS</li>
            </SliderCardList>
            <SliderCardLabel>Nov 2014 - May 2015</SliderCardLabel>
          </SliderCard>
        </SectionRow>
      </section>
    );
  }
}

export default Experience;
