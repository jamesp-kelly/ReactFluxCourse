'use strict';

var React = require('react'); //commonjs pattens

var Home = React.createClass({ //es5 syntax
  render: function() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, React Router and Flux for ultra-responsive web apps.</p>
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
