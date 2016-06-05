import React from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

var ReactDOM = require('react-dom');
var MainPage = require('./components/MainPage.jsx');
var LoginPage = require('./components/LoginPage.jsx');
var WelcomePage = require('./components/WelcomePage.jsx');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={MainPage}>
      <Route path='/login' component={LoginPage}>
        <Route path='/welcome' component={WelcomePage}></Route>
      </Route>
    </Route>
  </Router>),
document.getElementById('app'));
