import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import tick from './img/checked.svg';

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      newItem: '',
      currentItems: 'all', // all, active, complete
      todoItems: [
        { title: "Mua bim bim", isComplete: true },
        { title: "Di choi", isComplete: true },
        { title: "An uong", isComplete: true }
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onItemClicked(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const todoItems = this.state.todoItems;
      const index = this.state.todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      })
    }
  }
  onKeyUp(event) {
    let text = event.target.value;

    if (event.keyCode === 13) {
      if (!text) {
        return;
      }
      text = text.trim();
      if (!text) {
        return;
      }
      this.setState({
        newItem: '',
        todoItems: [
          { title: text, isComplete: false },
          ...this.state.todoItems
        ]
      })
    }
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }
  render() {
    const { todoItems, newItem } = this.state;
    // const todoItems = this.state.todoItems ; 


    const count = todoItems.length;

    if (todoItems.length) {
      return (
        <div className="App">
          <div className="Header">
            <img src={tick} width={32} height={32} />
            <input type="text"
              placeholder="Add a new item"
              value={newItem}
              onChange={this.onChange}
              onKeyUp={this.onKeyUp} />
          </div>
          {
            todoItems.map((item, index) =>
              <TodoItem
                key={index}
                item={item}
                onClick={this.onItemClicked(item)}
              />
            )
          }
          <div className="Last">
            <p>{count} items </p>
            <div>
              <p> All </p>
              <p> Active </p>
              <p> Complete </p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
