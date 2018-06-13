import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Header, Divider } from 'semantic-ui-react';
import ToDoList from './components/ToDoList';
import AddToDoForm from './components/AddToDoForm';
import ToggleDoneUndone from './components/ToggleDoneUndone';

class App extends Component {
  state = {
    isUndoneDisplayed: true,
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
  
  handleAddClick = todo => {
    this.setState({ todos: this.state.todos.concat(todo) });
  };
  
  handleToggleClick = isUndoneDisplayed => {
    this.setState({ isUndoneDisplayed: isUndoneDisplayed});
  }

  render() {
    const todos = this.state.todos
      .filter(todo => this.state.isUndoneDisplayed ? !todo.isDone : todo.isDone);
    return (
      <div
        className='ui text center aligned segment container'
        style={{ width: '33%', marginTop: '30px' }}
      >
        <Header as='h1'>To-Do List App</Header>
        <AddToDoForm
          onAddClick={ this.handleAddClick }
        />
        <Divider hidden />
        <ToggleDoneUndone
          isUndoneDisplayed={ this.state.isUndoneDisplayed }
          onToggleClick={ this.handleToggleClick }
        />
        <ToDoList
          todos={ todos }
          isUndoneDisplayed={ this.state.isUndoneDisplayed }
          onClick={ this.handleOnClick }
        />
      </div>
    );
  }
}

export default App;