import React, { Component } from 'react';

class PhotoAttributionLabel extends Component {
  constructor() {
    super();

    this.authorName = 'Sam Valadi';
    this.sourceURL = 'https://www.flickr.com/photos/132084522@N05/'
  }
  
  render() {
    return (
      <span id="photo-attribution-label">
        <span> Photo by </span>
        <a href={this.sourceURL} target="_blank" rel="noopener noreferrer" title="Photographer">
          <em>{this.authorName}</em>
        </a>
      </span>
    );
  }
}

export default PhotoAttributionLabel;
