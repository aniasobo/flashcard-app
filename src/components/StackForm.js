import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';

class StackForm extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      cards: []
    }
  }

  addCard() {
    const  { cards } = this.state;

    cards.push({ id: cards.length, prompt: '', answer: ''});

    this.setState({ cards });
  }


  render() {
    return (
      <div>
        <Link to='/'className='homelink'>
          <h4>Home</h4>
        </Link>
        <h4>Create a new Stack</h4>
        <br />
        <Form inline>
          <FormGroup>
            <FormLabel>Title:</FormLabel>
            {' '}
            <FormControl />
          </FormGroup>
        </Form>
        <br />
        <Button onClick={() => this.addCard()}>Add Card</Button>
      </div>
    )
  }
}

export default StackForm;