import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as serviceWorker from './serviceWorker';

import Home from './Home';
import Elections from './Elections';
import './index.css';

const queque = createBrowserHistory();

ReactDOM.render(
  <Router history={queque}>
    <Switch>
      <Route exact path="/" component={Home} /> } />
      <Route path="/elections" exact render={props => <Elections {... props} /> } />
    </Switch>
  </Router>,
  document.getElementById('root')
);


serviceWorker.unregister();
