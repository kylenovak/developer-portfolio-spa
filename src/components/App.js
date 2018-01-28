import React, { Component } from 'react';
import Header from './Header';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div id="home" className="App flexbox">
        <Header />
        
        <section className="App-info-wrapper">
          <header className="App-info-header flexbox-item flex-row">
            <h2 id="skills">What I'm Good At</h2>
          </header>

          <div className="flexbox-item fill-area flex-row">
            <div className="App-info">
              <h3>Web & Mobile Apps</h3>
              <p>I like software, it is very cool indeed. I like software, it is very cool indeed. I like software, it is very cool indeed.</p>
            </div>

            <div className="App-info">
              <h3>Game Development <i className="fas fa-gamepad"></i></h3>
              <p>I like software, it is very cool indeed. I like software, it is very cool indeed. I like software, it is very cool indeed.</p>
            </div>

            <div className="App-info">
              <h3>Software Engineering</h3>
              <p>I like software, it is very cool indeed. I like software, it is very cool indeed. I like software, it is very cool indeed.</p>
            </div>
          </div>
        </section>

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
