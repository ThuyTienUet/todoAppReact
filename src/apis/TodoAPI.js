import Axios from 'axios';
const URL = 'http://localhost:3001/api/todo/';

var filterSearchText = function (todos, searchText) {

  return todos.filter(todo => {
    if (todo.text) {
      if (todo.text.toLowerCase().includes(searchText)) {
        return true;
      }
      return false;
    }
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

export default {
  getTodos: () => {
    return Axios({
      method: 'GET',
      url: URL + 'list',
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
      url: URL + 'new',
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
      url: URL + 'delete',
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
      url: URL + 'update',
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