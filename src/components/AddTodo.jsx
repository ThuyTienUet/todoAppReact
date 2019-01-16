import React from 'react';
import createClass from 'create-react-class';


var AddTodo = createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    var todoText = this.refs.todoText.value;
    if (todoText.length > 0) {
      this.refs.todoText.value = "";
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (
      <div className="container_footer">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref="todoText"
            placeholder="what do you need to do"
          />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});
export default AddTodo;