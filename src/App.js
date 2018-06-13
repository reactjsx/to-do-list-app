import React, { Component } from 'react';
import ToDoList from './components/ToDoList';

class App extends Component {
  state = {
    displayUndone: true,
    todos: [
      {
        id: 'ad807abc-ac90-4e56-b60e-2a8a01f00ee6',
        content: 'Code along Trung Tran',
        isDone: false
      },
      {
        id: 'ede10591-5404-48ad-a3b2-bf5d1fd836bd',
        content: 'Watch the next season of Game Of Thrones',
        isDone: true
      },
      {
        id: 'ede10591-5404-48ad-a3b2-bf5d1fd81234',
        content: 'Go buy some eggs',
        isDone: false
      },
      {
        id: 'das31231-5404-48ad-a3b2-bf5d1fd81234',
        content: 'Return DVDs to Ginny',
        isDone: false
      }
    ]
  };

  handleOnClick = id => this.setState({ todos: this.state.todos.map(todo => {
    if (todo.id !== id) {
      return todo;
    } else {
      return { ...todo, isDone: !todo.isDone };
    }})
  });

  render() {
    const todos = this.state.todos
      .filter(todo => this.state.displayUndone ? !todo.isDone : todo.isDone);
    return (
      <div>
        <h1>To-Do List App</h1>
        <ToDoList
          todos={ todos }
          displayUndone={ this.state.displayUndone }
          onClick={ this.handleOnClick }
        />
      </div>
    );
  }
}

export default App;