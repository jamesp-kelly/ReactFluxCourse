'use strict';

var React = require('react');
var Router = require('react-router');
var CourseForm = require('./courseForm');
var CourseActions = require('../../actions/courseActions');
var CourseStore = require('../../stores/courseStore');
var AuthorStore = require('../../stores/authorStore');
var toastr = require('toastr');

//controller view
var ManageCoursePage = React.createClass({
  mixins: [
    Router.Navigation
  ],
  statics: {
    willTransitionFrom: function(transition, component) {
      if (component.state.dirty && !confirm('Leave without saving?')) {
        transition.abort();
      }
    }
  },
  getInitialState: function() {
    return {
      course: {id: '', title: '', length: ''},
      errors: {},
      dirty: false
    };
  },

  componentWillMount: function() { //sets state before initial render 
    var courseId = this.props.params.id; //from the path /course/:id

    if (courseId) {
      this.setState({
        course: CourseStore.getCourseById(courseId),
        authors: AuthorStore.getAllAuthors() 
      });
    }
  },

  setCourseState: function(event) { //called each keypress
    var field = event.target.name;
    var value = event.target.value;
    this.state.course[field] = value;
    this.setState({dirty: true});
    return this.setState({course: this.state.course});
  },
  courseFormIsValid: function() {
    var formIsValid = true;
    this.state.errors = {}; //clear any previous errors 

    if (this.state.course.title.length < 3) {
      this.state.errors.firstName = 'Course title must be at least 3 characters';
      formIsValid = false;
    }

    this.setState({errors: this.state.errors});
    
    return formIsValid;
  },
  saveCourse: function(event) {
    event.preventDefault();

    if (!this.courseFormIsValid()) {
      return;
    }

    if (this.state.course.id) { //updating
      CourseActions.updateCourse(this.state.course);
    } else {
      CourseActions.createCourse(this.state.course);
    }
    this.setState({dirty: false});
    toastr.success('Course saved');
    this.transitionTo('courses');
  },
  render: function() {
    return (
        <CourseForm 
          course={this.state.course}
          authors={this.state.authors}
          onChange={this.setCourseState}
          onSave={this.saveCourse}
          errors={this.state.errors} />
    );
  }
});

module.exports = ManageCoursePage;