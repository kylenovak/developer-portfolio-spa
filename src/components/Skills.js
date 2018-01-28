import React, { Component } from 'react';
import '../styles/Skills.css';

class Skills extends Component {
  render() {
    return (
      <section className="App-skills">
        <header className="flexbox-item flex-row">
          <h2 id="skills"><span><i class="fas fa-hashtag"></i> Technical Skills</span></h2>
        </header>

        <div className="flexbox-item fill-area flex-row">
          <div className="skill">
            <i className="fas fa-laptop"></i>
            <h3>Web & Mobile Apps</h3>
            <p>I like software, it is very cool indeed. I like software, it is very cool indeed. I like software, it is very cool indeed.</p>
          </div>

          <div className="skill">
            <i className="fas fa-gamepad"></i>
            <h3>Game Development</h3>
            <p>I like software, it is very cool indeed. I like.</p>
          </div>

          <div className="skill">
            <i className="fas fa-building"></i>
            <h3>Software Engineering</h3>
            <p>I like software, it is very cool indeed. I like software, it is very cool.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
