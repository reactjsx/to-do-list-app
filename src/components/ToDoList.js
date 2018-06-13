import React from 'react';
import { Item } from 'semantic-ui-react';
import ToDo from './ToDo';

const ToDoList = props => {
  const todos = props.todos.map(todo => (
    <ToDo
      key={ todo.id }
      content={ todo.content }
      onClick={ () => props.onClick(todo.id) }
      isUndoneDisplayed={ props.isUndoneDisplayed }
    />));
  return (
    <Item.Group divided>
      { todos }
    </Item.Group>
  );
};

export default ToDoList;