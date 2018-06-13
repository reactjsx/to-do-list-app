import React from 'react';
import { Item, Button } from 'semantic-ui-react';

const ToDo = props => (
  <Item>
    <Item.Content>
      <Item.Description>
        { props.content }
      </Item.Description>
      <Item.Extra>
        <Button
          onClick={ props.onClick }
          color='green'
        >
          { props.isUndoneDisplayed ? 'Done' : 'Undone' }
        </Button>
      </Item.Extra>
    </Item.Content>
  </Item>
);

export default ToDo;