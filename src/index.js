import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Home from './Home';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';

ReactDOM.render(<Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/join" component={App} />
    </Router>,
  document.getElementById('root')
);
