'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var CourseApi = require('../api/courseApi');
var ActionTypes = require('../constants/actionTypes');

var CourseActions = {
  createCourse: function(course) { //action creator
    var newCourse = CourseApi.saveCourse(course);

    Dispatcher.dispatch({ //action is dispatched, dispatcher tells stores that course was created 
      actionType: ActionTypes.CREATE_COURSE,
      course: newCourse
    });
  },
  updateCourse: function(course) { //action creator
    var updatedCourse = CourseApi.saveCourse(course);

    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_COURSE,
      course: updatedCourse
    });
  },
  deleteCourse: function(id) {
    CourseApi.deleteCourse(id);

    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_COURSE,
      id: id
    });
  }
};

module.exports = CourseActions;
