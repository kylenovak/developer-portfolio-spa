import React, { Component } from 'react';
import Link from '../../links/Link';
import './styles/photoAttributionModal.css';

class PhotoAttributionModal extends Component {
  render() {
    return (
      <div id="photo-attribution-modal" className={this.props.show ? '' : 'hidden'}>
        <Link href="https://www.flickr.com/photos/132084522@N05/17275578342" title="Source">
          "Gateway Arch - St. Louis - Missouri"
        </Link>

        <span> by </span>

        <Link href="https://www.flickr.com/photos/132084522@N05/" title="Author">
          Sam Valadi
        </Link>

        <span>, used under </span>

        <Link href="https://creativecommons.org/licenses/by/2.0/" title="License">
          CC BY
        </Link>

        <span> / Desaturated from original</span>

        <div className="caret"></div>
      </div>
    );
  }
}

export default PhotoAttributionModal;
