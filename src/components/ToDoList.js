import React from 'react';
import ToDo from './ToDo';

const ToDoList = props => {
  const todos = props.todos.map(todo => (
    <ToDo
      key={ todo.id }
      content={ todo.content }
      onClick={ () => props.onClick(todo.id) }
    />));
  return <ul>{ todos }</ul>;
};

export default ToDoList;