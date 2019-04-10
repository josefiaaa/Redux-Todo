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
