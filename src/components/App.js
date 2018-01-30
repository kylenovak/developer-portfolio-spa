import React, { Component } from 'react';
import Header from './Header';
import Skills from './Skills';
import '../styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="App flexbox">
        <div id="sticky"></div>

        <div className="background-img"></div>

        <main className="flexbox">
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
        </main>
      </div>
    );
  }
}

export default App;
