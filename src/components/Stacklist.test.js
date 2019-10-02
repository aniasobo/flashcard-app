import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StackList } from './Stacklist';
import { stacks  } from '../data/fixtures';

configure({ adapter: new Adapter() });

const props = { stacks };

describe('StackList', () => {
  const stackList = shallow(<StackList {...props} />);

  it('renders the correct number of links', () => {
    expect(stackList.find('Link').lenght).toEqual(props.stacks.lenght);
  });
});

