import React, { Component } from 'react';
import uuid from "uuid/v4";
import axios from 'axios';

import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js';
import TodoSearch from './TodoSearch.js';
import TodoAPI from '../../apis/TodoAPI';

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

  componentWillMount() {
    this.getTodoList().then(value => {
      console.log(value);
    })
  }

  getTodoList = async () => {
    const todoList = await TodoAPI.getTodos();
    this.setState({
      todos: todoList
    })
  }

  handleAddTodo = async (text) => {
    const todoNew = await TodoAPI.createTodo(text);
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: todoNew.id,
          text: todoNew.content,
          completed: false,
        }
      ]
    });
  }

  handleToggle = async (id) => {
    await TodoAPI.updateTodo(id);

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

  handleRemove = async (id) => {
    await TodoAPI.deleteTodo(id);
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
    var filterTodos = [];
    if (todos) {
      filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    } 
   console.log();
   
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="container">
            <TodoSearch onSearch={this.handleSearch} />
            <TodoList todos={filterTodos} onToggle={this.handleToggle} onRemove={this.handleRemove} />
            <AddTodo onAddTodo={this.handleAddTodo} />
          </div>
        </div>
      </div>
    )
  }
}

export default TodoApp;