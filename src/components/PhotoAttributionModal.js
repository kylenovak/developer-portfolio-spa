import React, { Component } from 'react';
import '../styles/photoAttributionModal.css';

class PhotoAttributionModal extends Component {
  render() {
    return (
      <div id="photo-attribution-modal" className={this.props.show ? '' : 'hidden'}>
        <a href="https://www.flickr.com/photos/132084522@N05/17275578342" target="_blank" rel="noopener noreferrer" title="Source">
          "Gateway Arch - St. Louis - Missouri"
        </a>

        <span> by </span>

        <a href="https://www.flickr.com/photos/132084522@N05/" target="_blank" rel="noopener noreferrer" title="Author">
          Sam Valadi
        </a>

        <span>, used under </span>

        <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank" rel="noopener noreferrer" title="License">
          CC BY
        </a>

        <span> / Desaturated from original</span>

        <div className="caret"></div>
      </div>
    );
  }
}

export default PhotoAttributionModal;
