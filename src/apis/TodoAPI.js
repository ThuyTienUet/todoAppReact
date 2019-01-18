//  // import axios from 'axios';

// var $ = require("jquery");
// // import React from 'react';

// var axios = require("axios");

// 
// };

import Axios from 'axios';

var filterSearchText = function (todos, searchText) {
  return todos.filter(todo => {
    if (todo.text.toLowerCase().includes(searchText)) {
      return true;
    }
    return false;
  });
};

var filterShowCompleted = function (todos, showCompleted) {
  var filtershowCompleted = [];
  if (showCompleted) {
    filtershowCompleted = todos;
  } else {
    filtershowCompleted = todos.filter(todo => {
      if (!todo.completed) {
        return true;
      }
    });
  }
  return filtershowCompleted;
};
var filterSortTodos = function (todos) {
  function compare(todoa, todob) {
    if (todoa.completed === true && todob.completed === false) {
      return 1;
    } else {
      return -1;
    }
  }
  var sorttodos = todos.sort(compare);
  return sorttodos;
}
var toString = function (todos) {
  return JSON.stringify(todos);
}

export default {
  getTodos: () => {
    return Axios({
      method: 'GET',
      url: 'http://localhost:3001/api/todo/list',
      data: null
    }).then(res => {
      return res.data.listTodo;
    }).catch(err => {
      if (err) {
        console.log(err);
        return err
      }
    })
  },
  createTodo: (text) => {
    return Axios({
      method: 'POST',
      url: 'http://localhost:3001/api/todo/new',
      data: {
        text: text
      }
    }).then(res => {
      return res.data.todo;
    }).catch(err => {
      if (err) {
        return err
      }
    })
  },
  deleteTodo: (id) => {
    return Axios({
      method: 'DELETE',
      url: 'http://localhost:3001/api/todo/delete',
      data: {
        id: id
      }
    }).then(res => {
      return res.data;
    }).catch(err => {
      if (err) {
        return err
      }
    })
  },
  updateTodo: (id) => {
    return Axios({
      method: 'PUT',
      url: 'http://localhost:3001/api/todo/update',
      data: {
        id: id
      }
    }).then(res => {
      return res.data.todo;
    }).catch(err => {
      if (err) {
        return err
      }
    })
  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filtertodos = todos;
    filtertodos = filterShowCompleted(filtertodos, showCompleted);
    filtertodos = filterSearchText(filtertodos, searchText);
    filtertodos = filterSortTodos(filtertodos);
    return filtertodos;
  }
}