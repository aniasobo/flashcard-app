import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StackForm } from './StackForm';

configure({ adapter: new Adapter() });

describe('StackForm', () => {
  const stackForm = shallow(<StackForm />);

  it('renders title', () => {
    expect(stackForm.find('h4').at(1).text()).toEqual('Create a new Stack');
  });
});