import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import Login from './containers/Login';
import User from './containers/User';
import Exchange from './containers/Exchange';
import Algorithm from './containers/Algorithm';
import AlgorithmEdit from './containers/AlgorithmEdit';
import AlgorithmLog from './containers/AlgorithmLog';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/user" component={User} />
      <Route path="/exchange" component={Exchange} />
      <Route path="/algorithm" component={Algorithm} />
      <Route path="/algorithm/edit" component={AlgorithmEdit} />
      <Route path="/algorithm/log" component={AlgorithmLog} />
    </Route>
    <Route path="/login" component={Login} />
  </Route>
);
