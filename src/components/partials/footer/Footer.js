import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SectionRow from '../sections/SectionRow';
import SectionColumn from '../sections/SectionColumn';
import Link from '../links/Link';
import './styles/footer.css';
const scrollToHash = require('../../../services/scrollToHash');

class Footer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.stickyNav = document.getElementById('navigation-sticky');
    this.staticNav = document.getElementById('navigation-static');
  }

  handleClick(e) {
    let node = e.target;

    if (node.localName !== 'ul' && node.localName !== 'li') {
      if (node.localName === 'span') {
        node = node.parentNode;
      }
      if (node.localName === 'img') {
        node = node.parentNode;
      }

      this.stickyNav.classList.remove('show');

      let id = scrollToHash(node.href);
      this.setActiveNavLink(id);
    }
  }

  setActiveNavLink(id) {
    id = (id === '') ? 'home' : id;
    this.syncActiveNavIds(`nav-${id}-static`);
  }

  syncActiveNavIds(id) {
    let staticNavItems = this.staticNav.children[0].children;
    let stickyNavItems = this.stickyNav.children[0].children;

    for (let i = 0; i < staticNavItems.length; i++) {
      if (staticNavItems[i].id === id) {
        staticNavItems[i].classList.add('active');
        stickyNavItems[i].classList.add('active');
      }
      else {
        staticNavItems[i].classList.remove('active');
        stickyNavItems[i].classList.remove('active');
      }
    }
  }

  render() {
    return (
      <footer id="footer">
        <div className="footer-wrapper">
          <SectionRow classes="footer-columns">
            <SectionColumn>
              <h4>Site Info</h4>
              <p>
                <span onClick={this.handleClick}>
                  <NavLink exact to="/">
                    <img src={require('../../../images/favicon.png')} title="Home" alt="Home" width="64" height="64" />
                  </NavLink>
                </span>
                This site was built by hand with HTML, CSS, JavaScript, and <Link href="https://reactjs.org/" title="ReactJS">ReactJS</Link> - Kyle Novak
              </p>
            </SectionColumn>
            <SectionColumn>
              <h4>Browse</h4>
              <ul>
                <div>
                  <li onClick={this.handleClick} title="My Technical Skills"><NavLink to="#skills">Skills</NavLink></li>
                  <li onClick={this.handleClick} title="My Professional Experience"><NavLink to="#experience">Experience</NavLink></li>
                  <li onClick={this.handleClick} title="My Education"><NavLink to="#education">Education</NavLink></li>
                </div>
                <div>
                  <li onClick={this.handleClick} title="My Personal Projects"><NavLink to="#projects">Projects</NavLink></li>
                  <li onClick={this.handleClick} title="About Me"><NavLink to="#about">About</NavLink></li>
                  <li onClick={this.handleClick} title="Contact Me"><NavLink to="#contact">Contact</NavLink></li>
                </div>
              </ul>
            </SectionColumn>
            <SectionColumn>
              <h4>Social Connect</h4>
              <ul className="social-connect">
                <li>
                  <Link href="https://www.linkedin.com/in/KyleJosephNovak" title="Connect with me on Linkedin">
                    <i className="fab fa-linkedin"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.twitter.com/KyleJosephNovak" title="Follow me on Twitter">
                    <i className="fab fa-twitter-square"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.github.com/kylenovak" title="Follow me on Github">
                    <i className="fab fa-github-square"></i>
                  </Link>
                </li>
              </ul>
            </SectionColumn>
          </SectionRow>
        </div>

        <div className="footer-sub-wrapper" id="foot">
          <SectionRow classes="footer-sub-columns">
            <div id="copyright" className="footer-sub-col">
              <i className="far fa-copyright"></i> Copyright {(new Date()).getFullYear()} Kyle J. Novak
            </div>
            <div id="built-with" className="footer-sub-col">
              Built with <i className="fas fa-heart"></i> in <Link href="https://www.google.com/maps/place/St+Louis,MO/" title="Saint Louis, Missouri">St. Louis, MO</Link>
            </div>
            <div id="credits" className="footer-sub-col">
              Powered by <Link href="https://www.cloudflare.com" title="Cloudflare">Cloudflare</Link> and <Link href="https://www.heroku.com" title="Heroku">Heroku</Link>
            </div>
          </SectionRow>
        </div>
      </footer>
    );
  }
}

export default Footer;
