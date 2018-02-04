import React, { Component } from 'react';
import Header from './Header';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import '../styles/app.css';

class App extends Component {
  render() {
    return (
      <div id="app" className="flexbox">
        <div id="background-img"></div>

        <main className="flexbox">
          <Header />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <About />
          <Contact />

          <footer id="footer">
            Footer
          </footer>
        </main>
      </div>
    );
  }
}

export default App;
