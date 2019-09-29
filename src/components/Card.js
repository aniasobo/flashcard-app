import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { prompt, answer } = this.props.card
    return (
      <div className='card'>
        <div className='card-prompt'><h4>{prompt}</h4></div>
        <div className='card-answer'><h4>{answer}</h4></div>
      </div>
    )
  }
}

export default Card;