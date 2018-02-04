import React, { Component } from 'react';
import SkillCard from './SkillCard';
import SkillPanel from './SkillPanel';
import SkillName from './SkillName';
import SkillBar from './SkillBar';
import '../styles/skills.css';
import '../styles/skillPanel.css';
import '../styles/skillBar.css';

class Skills extends Component {
  render() {
    return (
      <section id="skills">
        <header className="flexbox-item flex-row">
          <h2><span><i className="fas fa-hashtag"></i> Technical Skills</span></h2>
        </header>

        <section className="flexbox-item fill-area flex-row">
          <SkillCard skillName="Web Applications" icon="laptop">
            I develop apps by using web technologies; such as, JavaScript, ReactJS, NodeJS, HTML, and CSS.
          </SkillCard>

          <SkillCard skillName="Game Development" icon="gamepad">
            I create games for fun, as a hobby in my free-time, and as a way to improve my coding skills.
          </SkillCard>

          <SkillCard skillName="Software Engineering" icon="building">
            I am always learning. I read and study software engineering principles and best practices.
          </SkillCard>
        </section>

        <section className="panels flexbox-item fill-area flex-row">
          <SkillPanel panelName="Programming Languages">
            <ul>
              <li><SkillName name="JavaScript" /><SkillBar level="95" /></li>
              <li><SkillName name="Python" /><SkillBar level="90" /></li>
              <li><SkillName name="Java" /><SkillBar level="75" /></li>
              <li><SkillName name="C++" /><SkillBar level="60" /></li>
              <li><SkillName name="PHP" /><SkillBar level="70" /></li>
              <li><SkillName name="SQL" /><SkillBar level="85" /></li>
            </ul>
          </SkillPanel>

          <SkillPanel panelName="Frameworks & Web Technologies">
            <ul>
              <li><SkillName name="ReactJS" /><SkillBar level="90" /></li>
              <li><SkillName name="AngularJS" /><SkillBar level="60" /></li>
              <li><SkillName name="ExpressJS" /><SkillBar level="85" /></li>
              <li><SkillName name="NodeJS" /><SkillBar level="70" /></li>
              <li><SkillName name="HTML" /><SkillBar level="90" /></li>
              <li><SkillName name="CSS" /><SkillBar level="95" /></li>
            </ul>
          </SkillPanel>
        </section>
      </section>
    );
  }
}

export default Skills;
