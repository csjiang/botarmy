import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import Home from './Home';

import Dashboard from './Dashboard';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';


console.log(Dashboard);

ReactDOM.render(<Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/dash" component={Dashboard} />
      <Route path="/join" component={App} />
    </Router>,
  document.getElementById('root')
);
