import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SectionRow from '../sections/SectionRow';
import SectionColumn from '../sections/SectionColumn';
import Link from '../links/Link';
import './styles/footer.css';
const scrollToHash = require('../../../services/scrollToHash');

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="footer-wrapper">
          <SectionRow>
            <SectionColumn>
              <h4>Site Info</h4>
              <p>
                <NavLink exact to="/">
                  <img onClick={() => scrollToHash('#header')} src={require('../../../images/favicon.png')} title="Home" width="64" height="64" />
                </NavLink>
                This site was coded and styled by hand with HTML, CSS, JavaScript, and <Link href="https://reactjs.org/" title="ReactJS">ReactJS</Link>
              </p>
            </SectionColumn>
            <SectionColumn>
              <h4>Browse</h4>
              <ul>
                <div>
                  <li><NavLink to="#skills">Skills</NavLink></li>
                  <li><NavLink to="#experience">Experience</NavLink></li>
                  <li><NavLink to="#education">Education</NavLink></li>
                </div>
                <div>
                  <li><NavLink to="#projects">Projects</NavLink></li>
                  <li><NavLink to="#about">About</NavLink></li>
                  <li><NavLink to="#contact">Contact</NavLink></li>
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

        <div className="footer-sub-wrapper">
          <SectionRow>
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
