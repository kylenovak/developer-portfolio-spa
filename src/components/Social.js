import React, { Component } from 'react';
import '../styles/Social.css';

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
      <ul className="App-social">
        <li>
          <a href={this.linkedinURL} target="_blank">
            <button className="Linkedin">
              <i className="fab fa-linkedin"></i> {this.linkedinButtonText}
            </button>
          </a>
        </li>
        <li>
          <a href={this.twitterURL} target="_blank">
            <button className="Twitter">
              <i className="fab fa-twitter-square"></i> {this.twitterButtonText}
            </button>
          </a>
        </li>
      </ul>
    );
  }
}

export default Social;
