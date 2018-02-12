import React, { Component } from 'react';
import Link from '../links/Link';
import './styles/social.css';

class Social extends Component {
  render() {
    return (
      <ul className="social">
        <h3>Follow me online</h3>
        <li>
          <Link href="https://www.linkedin.com/in/KyleJosephNovak" title="Connect with me on Linkedin">
            <button><i className="fab fa-linkedin"></i> Linkedin</button>
          </Link>
        </li>
        <li>
          <Link href="https://www.twitter.com/KyleJosephNovak" title="Follow me on Twitter">
            <button><i className="fab fa-twitter-square"></i> Twitter</button>
          </Link>
        </li>
        <li>
          <Link href="https://www.github.com/kylenovak" title="Follow me on Github">
            <button><i className="fab fa-github-square"></i> Github</button>
          </Link>
        </li>
      </ul>
    );
  }
}

export default Social;
