import React from "react";
import createClass from "create-react-class";
import '../css/todo.css';

var Todo = createClass({
  handleToggle: function() {
    return this.props.onToggle(this.props.id);
  },
  handleRemove: function() {
    var { id } = this.props;
    return this.props.onRemove(id);
  },
  render: function() {
    var { text, completed } = this.props;
    var todoClassName = completed ? "todo todo-completed" : "todo";
  
    return (
      <div className={todoClassName}>
        <div className="todo-brief-information" onClick={this.handleToggle}>
          <div>
            <input type="checkbox" checked={completed} onChange={a => {}} />
          </div>
          <div>
            <p>{text}</p>
          </div>
        </div>
        <div className="todo-trash">
          <button className="button" onClick={this.handleRemove}>
            Remove
          </button>
        </div>
      </div>
    );
  }
});
export default Todo;
