import React, { Component } from 'react';
import Header from './partials/header/Header';
import StickyHeader from './partials/header/StickyHeader';
import Banner from './partials/banner/Banner';
import Navigation from './partials/navigation/Navigation';
import Footer from './partials/footer/Footer';
import Skills from './partials/skills/Skills';
import Experience from './partials/experience/Experience';
import Education from './partials/education/Education';
import Projects from './partials/projects/Projects';
import About from './partials/about/About';
import Contact from './partials/contact/Contact';
import UpArrow from './partials/arrows/UpArrow';
import './app.css';

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
            <Banner />
            <Navigation />
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
