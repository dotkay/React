import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Navigation, Link, browserHistory } from 'react-router';

module.exports = React.createClass({
  render: function() {
    return(
      <div>
        <ul>
          <li><Link to='/login'>Login</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
