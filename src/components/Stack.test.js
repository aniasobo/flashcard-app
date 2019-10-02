import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Stack } from './Stack';
import { stackData } from '../data/fixtures';

configure({ adapter: new Adapter() });
const props = { ...stackData };

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