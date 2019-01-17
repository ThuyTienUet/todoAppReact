import React, { Component } from 'react';

class AddTodo extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    var todoText = this.refs.todoText.value;
    if (todoText.length > 0) {
      this.refs.todoText.value = "";
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  }
  
  render() {
    return (
      <div className="container_footer">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref="todoText"
            placeholder="what do you need to do"
          />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}
export default AddTodo;