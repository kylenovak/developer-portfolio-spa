import React, { Component } from 'react';
import SectionHeader from './SectionHeader';
import SectionRow from './SectionRow';
import SkillCard from './SkillCard';
import SkillPanel from './SkillPanel';
import Skill from './Skill';
import '../styles/skills.css';

class Skills extends Component {
  render() {
    return (
      <section id="skills">
        <SectionHeader sectionTitle="Technical Skills" />

        <SectionRow>
          <SkillCard skillName="Web Applications" icon="laptop">
            I develop apps by using web technologies; such as, JavaScript, ReactJS, NodeJS, HTML, and CSS.
          </SkillCard>

          <SkillCard skillName="Game Development" icon="gamepad">
            I create games for fun, as a hobby in my free-time, and as a way to improve my coding skills.
          </SkillCard>

          <SkillCard skillName="Software Engineering" icon="building">
            I am always learning. I read and study software engineering principles and best practices.
          </SkillCard>
        </SectionRow>

        <SectionRow>
          <SkillPanel panelName="Programming Languages">
            <Skill name="JavaScript" level="95" />
            <Skill name="Python" level="90" />
            <Skill name="Java" level="75" />
            <Skill name="C++" level="60" />
            <Skill name="PHP" level="70" />
            <Skill name="SQL" level="85" />
          </SkillPanel>

          <SkillPanel panelName="Frameworks & Web Technologies">
            <Skill name="ReactJS" level="90" />
            <Skill name="AngularJS" level="60" />
            <Skill name="ExpressJS" level="85" />
            <Skill name="NodeJS" level="70" />
            <Skill name="HTML" level="90" />
            <Skill name="CSS" level="95" />
          </SkillPanel>
        </SectionRow>
      </section>
    );
  }
}

export default Skills;
