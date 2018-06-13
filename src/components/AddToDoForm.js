import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import uuid from 'uuid';

class AddToDoForm extends Component {
  state = {
    content: ''
  };
  
  handleInputChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value});
  };
  
  handleAddClick = () => {
    const id = uuid.v4();
    const todo = {
      id: id,
      content: this.state.content,
      isDone: false
    };
    this.props.onAddClick(todo);
  }
  
  render() {
    return (
      <Form>
        <Form.Field inline>
          <input
            name='content'
            placeholder='Add new To-Do'
            value={ this.state.todo }
            onChange={ this.handleInputChange }
          />
          <Button
            basic
            color='green'
            onClick={ this.handleAddClick }
          >
            Add
          </Button>
        </Form.Field>
      </Form>
    );
  }
}

export default AddToDoForm;