import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Video from './routes/video';
import Main from './routes/main';
// import registerServiceWorker from './registerServiceWorker';

import {
  HashRouter as Router,
  Route
} from 'react-router-dom'

const baseUrl = process.env.PUBLIC_URL;

ReactDOM.render(
  <Router basename={baseUrl}>
    <App>
      <Route exact={true} path="/" component={Main} />
      <Route exact={true} path="/video" component={Video} />
    </App>
  </Router>,

  document.getElementById('root')
);

// registerServiceWorker();
