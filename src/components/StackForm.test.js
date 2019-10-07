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

  it('renders home link', () => {
    expect(stackForm.find('h4').at(0).text()).toEqual('Home');
  });

  it('renders a form component', () => {
    expect(stackForm.find('Form').exists()).toBe(true);
  });

  it('renders an add new card button', () => {
    expect(stackForm.find('Button').at(0).props().children).toEqual('Add Card');
  });

  it('renders the submit form button', () => {
    expect(stackForm.find('Button').at(1).props().children).toEqual('Save and Add Stack');
  });
  
  describe('and updating the title', () => {
    beforeEach(() => {
      stackForm.find('FormControl').simulate('change', { target: { value: 'change title' }});
    });

    it('updates the title in state', () => {
      expect(stackForm.state().title).toEqual('change title');
    });
  });

  describe('when adding a new card', () => {
    beforeEach(() => {
      stackForm.find('Button').at(0).simulate('click');
    });

    it('adds a new card to the state', () => {
      expect(stackForm.state().cards.length).toEqual(1);
    });

    it('renders the prompt section', () => {
      expect(stackForm.find('FormLabel').at(1).props().children).toEqual('Prompt:');
    })
  });
});