'use strict';

var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <a href="/" className="navbar-brand" style={{"padding-top": "0px"}}>
            <img src="images/logo.png" style={{height: "50px", width: "50px"}} />
          </a>
          <ul className="nav navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/#authors">Authors</a></li>
            <li><a href="/#about">About</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Header;