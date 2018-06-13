import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class ToggleDoneUndone extends Component {
  state = {
    isUndoneDisplayed: this.props.isUndoneDisplayed
  };
  
  static getDerivedStateFromProps = (props, state) => {
    return {
      isUndoneDisplayed: props.isUndoneDisplayed
    };
  }
  
  handleToggleClick = (isUndoneDisplayed) => {
    this.props.onToggleClick(isUndoneDisplayed);
  };
  
  render() {
    return (
      <Button.Group>
        <Button
          primary={ !this.state.isUndoneDisplayed }
          onClick={ () => this.handleToggleClick(false) }
        >
          Done
        </Button>
        <Button.Or />
        <Button
          primary={ this.state.isUndoneDisplayed }
          onClick={ () => this.handleToggleClick(true) }
        >
          Undone
        </Button>
      </Button.Group>
    );
  }
}

export default ToggleDoneUndone;