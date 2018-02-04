import React, { Component } from 'react';

class AppContainer extends Component {
  render() {
    return (
      <div id="app-container" className="flexbox">
        <div id="sticky" className="hidden"></div>
        {this.props.children}
      </div>
    );
  }
}

export default AppContainer;
