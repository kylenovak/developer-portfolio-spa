import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App flexbox">
        <header>
          Header
        </header>

        <div className="flexbox-item fill-area flex-column">
          <div className="flexbox-item fill-area-content">
            Content
            <br /><br />
            Emulates height 100% with a horizontal flexbox with stretch
            <br /><br />
            This box with a border should fill the blue area except for the padding (just to show the middle flexbox item).
          </div>
          <div className="flexbox-item fill-area-content">
            Content
            <br /><br />
            Emulates height 100% with a horizontal flexbox with stretch
            <br /><br />
            This box with a border should fill the blue area except for the padding (just to show the middle flexbox item).
          </div>
          <div className="flexbox-item fill-area-content">
            Content
            <br /><br />
            Emulates height 100% with a horizontal flexbox with stretch
            <br /><br />
            This box with a border should fill the blue area except for the padding (just to show the middle flexbox item).
          </div>
        </div>

        <div className="flexbox-item fill-area flex-row">
          <div className="flexbox-item fill-area-content">Hello world!</div>
          <div className="flexbox-item fill-area-content">Hello world!</div>
          <div className="flexbox-item fill-area-content">Hello world!</div>
        </div>

        <footer>
          Footer
        </footer>
      </div>
    );
  }
}

export default App;
