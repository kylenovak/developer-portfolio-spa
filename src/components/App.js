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
      isBannerVisible: true
    };
  }

  handleScroll(e) {
    const y = e.target.scrollTop;
    this.setState((prevState, props) => {
      return {isBannerVisible: (y < 820)};
    });
  }

  render() {
    return (
      <div id="app-container" className="flexbox">
        <StickyHeader />
        <div id="app" className="flexbox" onScroll={this.handleScroll}>

          {/* NOTE: hide if banner is not visible; this fixes flickering on fast scrolling. */}
          <div id="background-img" className={this.state.isBannerVisible ? '' : 'hidden'}></div>

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
        <UpArrow hide={this.state.isBannerVisible} />
      </div>
    );
  }
}

export default App;
