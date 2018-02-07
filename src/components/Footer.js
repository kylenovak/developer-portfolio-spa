import React, { Component } from 'react';
import SectionRow from './SectionRow';
import Link from './Link';
import '../styles/footer.css';

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <SectionRow>
          <div id="copyright" className="footer-sub-col">
            <i class="far fa-copyright"></i> Copyright {(new Date()).getFullYear()} Kyle J. Novak
          </div>
          <div id="built-with" className="footer-sub-col">
            Built with <i class="fas fa-heart"></i> in <Link href="https://www.google.com/maps/place/St+Louis,MO/" title="Saint Louis, Missouri">St. Louis, MO</Link>
          </div>
          <div id="credits" className="footer-sub-col">
            Powered by <Link href="https://www.cloudflare.com" title="Cloudflare">Cloudflare</Link> and <Link href="https://www.heroku.com" title="Heroku">Heroku</Link>
          </div>
        </SectionRow>
      </footer>
    );
  }
}

export default Footer;
