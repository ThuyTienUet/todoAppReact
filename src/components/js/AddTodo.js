import React, { Component } from 'react';
import { Button, FormControl } from 'react-bootstrap';

class AddTodo extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    var todoText = this.input.value;

    if (todoText.length > 0) {
      this.input.value = "";
      this.props.onAddTodo(todoText);
    } else {
      this.input.focus();
    }
  }
  
  render() {
    return (
      <div className="container_footer">
        <form >
          <FormControl
            type="text"
            inputRef={(ref) => {this.input = ref}}
            placeholder="Add Todo"
          />
          {/* <button>Add Todo</button> */}
          <Button bsStyle="primary" onClick={this.handleSubmit}>Add Todo</Button>
        </form>
      </div>
    );
  }
}
export default AddTodo;