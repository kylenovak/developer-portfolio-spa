import React, { Component } from 'react';
import Header from './Header';
import StickyHeader from './StickyHeader';
import Footer from './Footer';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import UpArrow from './UpArrow';
import '../styles/app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      hide: true
    };
  }

  handleScroll(e) {
    const y = e.target.scrollTop;
    this.setState((prevState, props) => {
      return {hide: (y < 820)};
    });
  }

  render() {
    return (
      <div id="app-container" className="flexbox">
        <StickyHeader />
        <div id="app" className="flexbox" onScroll={this.handleScroll}>
          <div id="background-img"></div>
          <main className="flexbox">
            <Header />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <About />
            <Contact />
            <Footer />
          </main>
        </div>
        <UpArrow hide={this.state.hide} />
      </div>
    );
  }
}

export default App;
