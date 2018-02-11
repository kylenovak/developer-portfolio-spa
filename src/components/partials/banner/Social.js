import React, { Component } from 'react';
import Link from '../links/Link';
import './styles/social.css';

class Social extends Component {
  constructor(props) {
    super(props);

    this.linkedinButtonText = 'Connect with Kyle';
    this.twitterButtonText = 'Follow Kyle';

    this.linkedinURL = 'https://www.linkedin.com/in/KyleJosephNovak';
    this.twitterURL = 'https://www.twitter.com/KyleJosephNovak';
  }

  render() {
    return (
      <ul id="social">
        <li>
          <Link href={this.linkedinURL} title="Connect with me on Linkedin">
            <button className="Linkedin">
              <i className="fab fa-linkedin"></i> {this.linkedinButtonText}
            </button>
          </Link>
        </li>
        <li>
          <Link href={this.twitterURL} title="Follow me on Twitter">
            <button className="Twitter">
              <i className="fab fa-twitter-square"></i> {this.twitterButtonText}
            </button>
          </Link>
        </li>
      </ul>
    );
  }
}

export default Social;
