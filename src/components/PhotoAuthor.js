import React, { Component } from 'react';
import '../styles/PhotoAuthor.css';

class PhotoAuthor extends Component {
  constructor() {
    super();
    this.authorName = 'Sam Valadi';
    this.authorURL = 'https://www.flickr.com/photos/132084522@N05/17275578342';
  }

  render() {
    return (
      <span className="App-photo-author">
        Photo by <a title="Photographer" target="_blank" href={this.authorURL}><em>{this.authorName}</em></a>
      </span>
    );
  }
}

export default PhotoAuthor;
