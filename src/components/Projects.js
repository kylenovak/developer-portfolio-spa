import React, { Component } from 'react';
import SectionHeader from './SectionHeader';
import SectionRow from './SectionRow';
import SliderCard from './SliderCard';
import SliderCardList from './SliderCardList';
import Link from './Link';
import '../styles/sliderCard.css';
import '../styles/projects.css';

class Projects extends Component {
  render() {
    return (
      <section id="projects">
        <SectionHeader sectionTitle="Independent Projects" />
        <SectionRow>
          <SliderCard title="R&#233;sum&#233; Web App" subTitle="www.kylejnovak.com">
            <p>I rebuilt my personal portfolio site using a modern ES6 tech stack.</p>
            <SliderCardList title="Tools & Technologies">
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>ExpressJS</li>
              <li>NodesJS</li>
              <li>HTML</li>
              <li>CSS</li>
            </SliderCardList>
          </SliderCard>
          <SliderCard title="Portfolio Web App" subTitle="www.kylejnovak.com">
            <p>This was my original portfolio site that I built with a Python stack.</p>
            <SliderCardList title="Tools & Technologies">
              <li>Python</li>
              <li>Flask</li>
              <li>SQLAlchemy</li>
              <li>PostgreSQL</li>
              <li>CSS/SCSS</li>
              <li>HTML</li>
              <li>JavaScript</li>
              <li>jQuery</li>
            </SliderCardList>
            <Link href="https://github.com/kylenovak/kylejnovak-personal-portfolio" title="Github source code">
              <button><i class="fab fa-github-square"></i> View Source</button>
            </Link>
          </SliderCard>
          <SliderCard title="Wordpress Blog" subTitle="novak.codes">
            <p>I designed and built a wordpress child-theme on top of the Genesis theme framework for my blog.</p>
            <SliderCardList title="Tools & Technologies">
              <li>Wordpress</li>
              <li>PHP</li>
              <li>jQuery</li>
              <li>CSS</li>
              <li>HTML</li>
            </SliderCardList>
            <Link href="https://github.com/kylenovak/novakcodes-theme-project" title="Github source code">
              <button><i class="fab fa-github-square"></i> View Source</button>
            </Link>
          </SliderCard>
        </SectionRow>
      </section>
    );
  }
}

export default Projects;
