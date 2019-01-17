import React, { Component } from 'react';
import uuid from "uuid/v4";
import axios from 'axios';

import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js';
import TodoSearch from './TodoSearch.js';
import TodoAPI from './TodoAPI.js';

class TodoApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showCompleted: false,
      searchText: "",
      todos: []
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    console.log('mount');

    this.getTodoList().then(value => {
      console.log(value);
    })
  }

  getTodoList = async () => {
    const a = await TodoAPI.getTodos();
    this.setState({
      todos: a
    })
    // console.log(this.state);
    // a.then(value => {
    //   console.log(value);
    //   this.setState({
    //     todos: value
    //   }, () => {
    //     console.log(this.state);
    //   })
    // })

  }

  handleAddTodo(text) {
    console.log('add todo');

    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
        }
      ]
    });
  }

  handleToggle(id) {
    var updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  }

  handleSearch(searchText, showCompleted) {
    this.setState({
      searchText: searchText.toLowerCase(),
      showCompleted: showCompleted
    });
  }

  handleRemove(id) {
    var newTodos = this.state.todos.filter((todo) => {
      if (todo.id === id) {
        return false;
      }
      return true;
    })
    this.setState({
      todos: newTodos
    })
  }

  // componentDidUpdate() {
  //   TodoAPI.setTodos(this.state.todos);
  // }

  render() {
    var { todos, showCompleted, searchText } = this.state;
    console.log(todos);

    // var filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="container">
            <TodoSearch onSearch={this.handleSearch} />
            <TodoList todos={todos} onToggle={this.handleToggle} onRemove={this.handleRemove} />
            <AddTodo onAddTodo={this.handleAddTodo} />
          </div>
        </div>
      </div>
    )
  }
}

export default TodoApp;