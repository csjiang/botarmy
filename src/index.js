import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Home from './Home';
import PostAuth from './PostAuth';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';

ReactDOM.render(<Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/join" component={App} />
      <Route path="/authenticated" component={PostAuth} />
    </Router>,
  document.getElementById('root')
);
