import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'; 
import Card from './Card';

export const Stack = ({stack: {title, cards}}) => {
    return (
      <div class="inner">
        <Link className='homelink' to='/'><h4 class="f6 link dim br2 ba ph3 pv2 mb2 dib washed-red">Home</h4> </Link>
        <h3>{title}</h3>
        <br />
        {
          cards.map(card => {
            return (
              <Card key={card.id} card={card} />
            )
          })
        }
      </div>
    )
}

function mapStateToProps(state) {
  return { stack: state.stack }
}

export default connect(mapStateToProps, null)(Stack);