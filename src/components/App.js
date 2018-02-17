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
    this.handleResize = this.handleResize.bind(this);

    this.state = {
      isScrollAtBottom: false,
      isStickyNavHidden: true
    };
  }

  setScrollState(el) {
    const y = el.scrollTop;
    this.setState({
      isScrollAtBottom: y >= (el.scrollHeight - el.offsetHeight),
      isStickyNavHidden: y <= this.navigation.offsetTop
    });
  }

  handleScroll(e) {
    this.setScrollState(this.app);
  }

  handleResize(e) {
    this.setScrollState(this.app);
  }

  componentDidMount() {
    // cache dom elements
    this.app = document.getElementById('app');
    this.skills = document.getElementById('skills');
    this.navigation = document.getElementById('navigation-static');

    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <div id="app-container" className="flexbox">
        <StickyHeader hide={this.state.isStickyNavHidden}>
          <Navigation uniqueNavIdSuffix="sticky" />
        </StickyHeader>

        <Header uniqueHeaderIdSuffix="sticky" />

        <div id="app" className="flexbox" onScroll={this.handleScroll}>

          {/* NOTE: hide if banner is not visible; this fixes flickering on fast scrolling. */}
          <div id="background-img" className={this.state.isStickyNavHidden ? '' : 'hidden'}></div>

          <main className="flexbox">
            <Header uniqueHeaderIdSuffix="static" />
            <Banner />
            <div style={{opacity: this.state.isStickyNavHidden ? '1': '0'}}>
              <Navigation uniqueNavIdSuffix="static" />
            </div>
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <About />
            <Contact />
            <Footer />
          </main>
        </div>
        <UpArrow hide={this.state.isStickyNavHidden || this.state.isScrollAtBottom} />
      </div>
    );
  }
}

export default App;
