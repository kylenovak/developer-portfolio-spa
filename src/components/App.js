import React, { Component } from 'react';
import Header from './Header';
import Skills from './Skills';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div id="home" className="App flexbox">
        <Header />
        <Skills />


        <div className="flexbox-item fill-area flex-column">
          <div className="flexbox-item">Hello world!</div>
          <div className="flexbox-item">Hello world!</div>
          <div className="flexbox-item">Hello world!</div>
        </div>


        <footer id="footer" className="App-footer">
          Footer
        </footer>
      </div>
    );
  }
}

export default App;
