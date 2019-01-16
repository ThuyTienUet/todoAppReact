import React from 'react';
import createClass from 'create-react-class';
import Todo from './Todo';

var TodoList = createClass({
  handleToggle: function(id){
    return this.props.onToggle(id);
  },
  handleRemove: function(id){
    return this.props.onRemove(id);
  },
  render: function() {
    var { todos } = this.props;
    var renderTodos = () => {
      if(todos.length ===0){
        return (
          <p className="container_message">Nothing to do</p>
        )
      }
      return todos.map(todo => {
        return <Todo key={todo.id}{...todo} onToggle={this.handleToggle} onRemove={this.handleRemove}/>;
      });
    };

    return (
      <div>
          {renderTodos()}
      </div>
    );
  }
});
export default TodoList;
