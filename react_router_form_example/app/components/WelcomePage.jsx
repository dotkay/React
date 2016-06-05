import React from 'react';
import { Router, Navigation } from 'react-router';

module.exports = React.createClass({
  mixins: [Navigation],

  render: function(){
    var name = this.props.name;
    return(
      <div>
        <h3>Welcome {name}!!</h3>
      </div>
    )
  }
});
