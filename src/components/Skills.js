import React, { Component } from 'react';
import Skill from './Skill';
import '../styles/Skills.css';

class Skills extends Component {
  render() {
    return (
      <section className="App-skills">
        <header className="flexbox-item flex-row">
          <h2 id="skills"><span><i class="fas fa-hashtag"></i> Technical Skills</span></h2>
        </header>

        <div className="flexbox-item fill-area flex-row">
          <Skill title="Web & Mobile Apps">
            I like software, it is very cool indeed. I like software, it is very cool indeed. I like software, it is very cool indeed.
          </Skill>

          <Skill title="Game Development">
            I like software, it is very cool indeed. I like.
          </Skill>

          <Skill title="Software Engineering">
            I like software, it is very cool indeed. I like software, it is very cool.
          </Skill>
        </div>
      </section>
    );
  }
}

export default Skills;
