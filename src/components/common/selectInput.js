'use strict';

var React = require('react');

var SelectInput = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    allValues: React.PropTypes.array.isRequired,
    selectedValue: React.PropTypes.object.isRequired,
    error: React.PropTypes.string
  },
  render: function() {

    var createSelectOption = function(author) {

      var selected = '';
      if (author.id === this.props.selectedValue.id) { 
        selected = 'selected';
      }

      return (
        <option selected={selected}>{author.firstName} {author.lastName}</option> 
      );
    };

    var wrapperClass = 'form-group'; 
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += ' ' + 'has-error';
    }
    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <div className="field">

          <select class="form-control" name={this.props.name}>
            {this.props.allValues.map(createSelectOption, this)}
          </select>

          <div className="input">{this.props.error}</div>
        </div>
      </div>
    );
  }
});

module.exports = SelectInput;