import React, { Component } from 'react';
import '../styles/Social.css';

class Social extends Component {
  constructor(props) {
    super(props);
    this.linkedinURL = 'https://www.linkedin.com/in/KyleJosephNovak';
    this.twitterURL = 'https://www.twitter.com/KyleJosephNovak';
  }

  render() {
    return (
      <ul className="App-social">
        <li>
          <a href={ this.linkedinURL } target="_blank">
            <button className="Linkedin">
              <i class="fab fa-linkedin"></i> { this.props.linkedinButtonText }
            </button>
          </a>
        </li>
        <li>
          <a href={ this.twitterURL } target="_blank">
            <button className="Twitter">
              <i class="fab fa-twitter-square"></i> { this.props.twitterButtonText }
            </button>
          </a>
        </li>
      </ul>
    );
  }
}

export default Social;
