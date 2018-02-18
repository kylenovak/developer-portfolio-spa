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
    const width = window.innerWidth;
    let scrollOffset = 64;
    let hash = 'home';

    if (width < 900) {
      scrollOffset = 44;
    }
    else if (width >= 900 && width < 1200) {
      scrollOffset = 54;
    }

    if (y > this.contact.offsetTop - scrollOffset) {
      hash = 'contact';
    }
    else if (y > this.about.offsetTop - scrollOffset) {
      hash = 'about';
    }
    else if (y > this.projects.offsetTop - scrollOffset) {
      hash = 'projects';
    }
    else if (y > this.education.offsetTop - scrollOffset) {
      hash = 'education';
    }
    else if (y > this.experience.offsetTop - scrollOffset) {
      hash = 'experience';
    }
    else if (y > this.skills.offsetTop - scrollOffset) {
      hash = 'skills';
    }

    this.setState({
      isScrollAtBottom: y >= (el.scrollHeight - el.offsetHeight),
      isStickyNavHidden: y <= this.navigation.offsetTop,
      activeNavHash: hash
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
    this.experience = document.getElementById('experience');
    this.education = document.getElementById('education');
    this.projects = document.getElementById('projects');
    this.about = document.getElementById('about');
    this.contact = document.getElementById('contact');

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
          <Navigation uniqueNavIdSuffix="sticky" activeNavHash={this.state.activeNavHash} />
        </StickyHeader>

        <Header uniqueHeaderIdSuffix="sticky" />

        <div id="app" className="flexbox" onScroll={this.handleScroll}>

          {/* NOTE: hide if banner is not visible; this fixes flickering on fast scrolling. */}
          <div id="background-img" className={this.state.isStickyNavHidden ? '' : 'hidden'}></div>

          <main className="flexbox">
            <Header uniqueHeaderIdSuffix="static" />
            <Banner />
            <div style={{opacity: this.state.isStickyNavHidden ? '1': '0'}}>
              <Navigation uniqueNavIdSuffix="static" activeNavHash={this.state.activeNavHash} />
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
