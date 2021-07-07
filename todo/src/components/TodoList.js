import React from 'react';

import '../App.css';
import { connect } from "react-redux";

function TodoList(props) {
  return (
    <div className='list'>
        <div className='todoWrap'>
            {props.todos.map((todo, index) => {
          return <div className='todo' key={index}>{todo.todo}
         </div>;
        })}
    </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(TodoList);