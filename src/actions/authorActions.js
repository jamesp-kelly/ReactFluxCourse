'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
  createAuthor: function(author) { //action creator
    var newAuthor = AuthorApi.saveAuthor(author);

    Dispatcher.dispatch({ //action is dispatched, dispatcher tells stores that author was created 
      actionType: ActionTypes.CREATE_AUTHOR,
      author: newAuthor
    });
  }
};

module.exports = AuthorActions;
