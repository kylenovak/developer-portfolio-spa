import React, { Component } from 'react';
import PhotoAttributionModal from './PhotoAttributionModal';
import PhotoAttributionIcon from './PhotoAttributionIcon';
import PhotoAttributionLabel from './PhotoAttributionLabel';
import './styles/photoAttribution.css';

class PhotoAttribution extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAttributionIconClicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((prevState, props) => {
      return {isAttributionIconClicked: !prevState.isAttributionIconClicked};
    });
  }

  render() {
    return (
      <span id="photo-attribution">
        <PhotoAttributionModal show={this.state.isAttributionIconClicked} />

        <PhotoAttributionIcon onClickHandler={this.handleClick} />

        <PhotoAttributionLabel />
      </span>
    );
  }
}

export default PhotoAttribution;
