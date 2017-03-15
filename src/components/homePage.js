'use strict';

var React = require('react'); //commonjs pattens
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({ //es5 syntax
  render: function() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, React Router and Flux for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
});

/*class Home extends React.Component { //es6 class syntax
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, React Router and Flux for ultra-responsive web apps.</p>
      </div>
    );
  }
}*/

module.exports = Home;
