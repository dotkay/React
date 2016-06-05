import React from 'react';
import { Router, Navigation, browserHistory } from 'react-router';

module.exports = React.createClass({
  mixins: [Navigation],

  getInitialState: function() {
    return {
      name: ''
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();
    browserHistory.push('/welcome');
    this.setState({name: e.target.name.value});
  },

  render: function(){
    return(
        <form className="form" onSubmit = {this.handleSubmit}>
          <div className="form-group">
            <label className="control-label" htmlFor="name">Enter your name:</label>
            <input type="text" className="form-control" id="name" name="name"
                      placeholder="Enter your Name"/>
          </div>
          <div className="form-group">
            <button className="btn" type="submit">Submit</button>
          </div>
          {this.props.children}
        </form>
    )
  }

});
