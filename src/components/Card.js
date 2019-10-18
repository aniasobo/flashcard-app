import React, { Component } from 'react';

class Card extends Component {
  constructor() {
    super();
    
    this.state = { reveal: false};
  }

  render() {
    const { prompt, answer } = this.props.card
    return (
      <div className='card' onClick={() => this.setState({ reveal: true })}>
        <div className='card-prompt'>
          <p class="f4 lh-copy measure">{prompt}</p>
        </div>
        <div className='card-answer'>
          <p className={this.state.reveal ? 'text-revealed' : 'text-hidden'}>{answer}</p>
        </div>
      </div>
    )
  }
}

export default Card;