//  // import axios from 'axios';

// var $ = require("jquery");
// // import React from 'react';

// var axios = require("axios");

// var filterSearchText = function (todos, searchText) {
//   return todos.filter(todo => {
//     if (todo.text.toLowerCase().includes(searchText)) {
//       return true;
//     }
//     return false;
//   });
// };

// var filterShowCompleted = function (todos, showCompleted) {
//   var filtershowCompleted = [];
//   if (showCompleted) {
//     filtershowCompleted = todos;
//   } else {
//     filtershowCompleted = todos.filter(todo => {
//       if (!todo.completed) {
//         return true;
//       }
//     });
//   }
//   return filtershowCompleted;
// };
// var filterSortTodos = function (todos) {
//   function compare(todoa, todob) {
//     if (todoa.completed === true && todob.completed === false) {
//       return 1;
//     } else {
//       return -1;
//     }
//   }
//   var sorttodos = todos.sort(compare);
//   return sorttodos;
// }
// var toString = function (todos) {
//   return JSON.stringify(todos);
// }
// module.exports = {
//   getTodos: function () {
//     console.log('abc');

//     var todos = JSON.parse(localStorage.getItem("todos"));
//     return $.isArray(todos) ? todos : [];

//   },
//   setTodos: function (todos) {
//     if ($.isArray(todos)) {
//       localStorage.setItem("todos", JSON.stringify(todos));
//     }
//   },
//   getTodo: function (id) {
//     var todos = this.getTodos();
//     var thisTodo = undefined;
//     todos.forEach((todo) => {
//       if (todo.id === id) {
//         thisTodo = todo;
//         return;
//       }
//     })
//     return thisTodo;
//   },
//   setTodo: function (updateTodo) {
//     var todos = this.getTodos();
//     var newTodos = todos.map(todo => {
//       if (todo.id === updateTodo.id) {
//         return updateTodo;
//       } else {
//         return todo;
//       }
//     })
//     console.log(toString(newTodos));
//     this.setTodos(newTodos);
//     return true;
//   },
//   filterTodos: function (todos, showCompleted, searchText) {
//     var filtertodos = todos;
//     // console.log(JSON.stringify(filtertodos));
//     filtertodos = filterShowCompleted(filtertodos, showCompleted);
//     filtertodos = filterSearchText(filtertodos, searchText);
//     filtertodos = filterSortTodos(filtertodos);
//     return filtertodos;
//   }
// };

import Axios from 'axios';

export default {
  getTodos: () => {
    console.log('get  todos');

    return Axios({
      method: 'POST',
      url: 'http://localhost:3001/api/todo/list',
      data: null
    }).then( res => {
      return res.data.listTodo;
    }).catch(err => {
      if (err) {
        console.log(err);
        return err
      }
    })
  }
}