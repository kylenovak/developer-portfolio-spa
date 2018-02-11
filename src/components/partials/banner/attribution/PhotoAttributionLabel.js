import React, { Component } from 'react';
import Link from '../../links/Link';

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
        <Link href={this.sourceURL} title="Photographer">
          <em>{this.authorName}</em>
        </Link>
      </span>
    );
  }
}

export default PhotoAttributionLabel;
