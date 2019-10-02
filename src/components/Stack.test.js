import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Stack } from './Stack';

configure({ adapter: new Adapter() });

const props = {
  stack: {
    id: 0, 
    title: 'test title',
    cards: [{ id: 0, prompt: 'test prompt', answer: 'test answer'},
            { id: 1, prompt: 'another test', answer: 'another test answer'}]
  }
};

describe('Stack', () => {
  const stack = shallow(<Stack {...props} />);
  
  it('renders the title', () => {
    expect(stack.find('h3').text()).toEqual(props.stack.title);
  });

  it('renders Home link', () => {
    expect(stack.find('Link h4').text()).toEqual('Home');
  });

  it('renders the correct number of cards', () => {
    expect(stack.find('Card').length).toEqual(props.stack.cards.length);
  });
});