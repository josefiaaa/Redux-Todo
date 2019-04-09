import React, { Component } from 'react';

import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  addTodo = text => {
    let newTodo = {
      todo: text,
      completed: false
    };
    this.setState(prev => {
      return { todos: [...prev.todos, newTodo] };
    });
  };


  render() {
    return (
      <div className="App">
        <Header />
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}

export default App;
