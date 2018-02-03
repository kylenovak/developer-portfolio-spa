import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

ReactDOM.render(
  <HashRouter>
    <div className="flexbox">
      <div id="sticky" className="hidden"></div>
      <App />
    </div>
  </HashRouter>,
  document.getElementById('root')
);
registerServiceWorker();
