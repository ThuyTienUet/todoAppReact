import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
    handleToggle(id){
        return this.props.onToggle(id);
      }

      handleRemove(id){
        return this.props.onRemove(id);
      }

      render() {
        var { todos } = this.props;
        var renderTodos = () => {
          if(todos.length ===0){
            return (
              <p className="container_message">Nothing to do</p>
            )
          }
          return todos.map(todo => {
            return <Todo key={todo._id}{...todo} onToggle={this.handleToggle} onRemove={this.handleRemove}/>;
          });
        };
    
        return (
          <div>
              {renderTodos()}
          </div>
        );
      }
}

export default TodoList;
