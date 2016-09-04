/* @flow */

import React from 'react';
import { view } from 'redux-elm';
import { Router, Route } from 'react-router';

import connectView from '../utils/connectView';

import Demo from '../pages/demo/view';
import Home from '../pages/home/view';

const routes = history => (
  <Router history={history}>
    <Route
      path="/"
      component={connectView(Home, 'home', 'Home')}
    />
    <Route
      path="/demo"
      component={connectView(Demo, 'demo', 'Demo')}
    />
  </Router>
);

export default view(({ history }) => routes(history));
