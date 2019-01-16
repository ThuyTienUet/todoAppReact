import React from 'react';
import createClass from 'create-react-class';
import uuid from "uuid/v4";

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodoSearch from './TodoSearch';
import TodoAPI from './TodoAPI';

var TodoApp = createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: "",
      // todos: TodoAPI.getTodos()
      todos: TodoAPI.getTodos()
    };
  },
  handleAddTodo: function(text) {
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
  },
  handleToggle: function(id) {
    var updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  },
  handleSearch: function(searchText, showCompleted) {
    this.setState({
      searchText: searchText.toLowerCase(),
      showCompleted: showCompleted
    });
  },
  handleRemove: function(id){
    var newTodos = this.state.todos.filter((todo)=>{
      if(todo.id === id){
        return false;
      }
      return true;
    })
    this.setState({
      todos: newTodos
    })
  },
  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
  },
  render: function() {
    var { todos, showCompleted, searchText } = this.state;
    var filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    // var filterTodos = [];
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch} />
              <TodoList todos={filterTodos} onToggle={this.handleToggle} onRemove={this.handleRemove} />
              <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default TodoApp;
