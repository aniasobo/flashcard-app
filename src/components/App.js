import React from 'react';
import { Link } from 'react-router-dom';
import StackList from './Stacklist';

  const App = () => {
    return (
      <div class="inner">
        <h2>Flashcard Pro</h2>
        <hr/>
        <StackList />
        <hr />
        <Link to='stack_form'><h4 class="f6 link dim br2 ba ph3 pv2 mb2 dib washed-red">Create a new Stack</h4></Link>
      </div>
    )};

export default App;