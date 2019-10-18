import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { addStack } from '../actions';

export class StackForm extends Component {
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

  updateCardPart(event, index, part) {
    const { cards } = this.state;

    cards[index][part] = event.target.value;

    this.setState({ cards });
  }

  addStack() {
    this.props.addStack(this.state);
  }

  render() {
    return (
      <div class='inner'>
        <Link to='/'className='homelink'>
          <h4 class="f6 link dim br2 ba ph3 pv2 mb2 dib washed-red">Home</h4>
        </Link>
        <h2>Create a new Stack</h2>
        <br />
        <Form inline>
          <FormGroup>
            <FormLabel className='f6 b db mb2'>Name your card stack:</FormLabel>
            {' '}
            <FormControl onChange={event => this.setState({ title: event.target.value })} />
          </FormGroup>
          {
            this.state.cards.map((card, index) => {
              return (
                <div key={card.id}>
                  <br />
                  <FormGroup>
                    <FormLabel>Prompt:</FormLabel>
                    {' '}
                    <FormControl onChange={event => this.updateCardPart(event, index, 'prompt')}/>
                    {' '}
                    <FormLabel>Answer:</FormLabel>
                    {' '}
                    <FormControl onChange={event => this.updateCardPart(event, index, 'answer')}/>                    
                  </FormGroup>
                </div>
              )
            })
          }
        </Form>
        <br />
        <Link className='f6 link dim br2 ba ph3 pv2 mb2 dib washed-red' onClick={() => this.addCard()}>Add Card</Link>
        {' '}
        <Link className='f6 link dim br2 ba ph3 pv2 mb2 dib washed-red' onClick={() => this.addStack()}>Save and Add Stack</Link>
      </div>
    )
  }
}

export default connect(null, { addStack })(StackForm);