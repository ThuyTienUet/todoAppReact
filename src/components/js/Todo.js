import React, { Component } from "react";
import { Button } from 'react-bootstrap';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    return this.props.onToggle(this.props._id);
  }

  handleRemove() {
    var { _id } = this.props;
    return this.props.onRemove(_id);
  }

  render() {
    var { text, completed } = this.props;
    var todoClassName = completed ? "todo todo-completed" : "todo";

    return (
      <div className={todoClassName}>
        <div className="todo-brief-information" onClick={this.handleToggle}>
          <div>
            <input type="checkbox" checked={completed} onChange={a => { }} />
          </div>
          <div className="todo-subtext">
            <p>{text}</p>
          </div>
        </div>
        <div className="todo-trash">
          {/* <button className="button" onClick={this.handleRemove}>
            Remove
              </button> */}
          <Button bsStyle="danger" onClick={this.handleRemove}>
            Remove
              </Button>
        </div>
      </div>
    );
  }
}

export default Todo;
