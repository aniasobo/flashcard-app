import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StackForm } from './StackForm';

configure({ adapter: new Adapter() });

const testTitle = 'change title';
const testPrompt = 'change prompt';
const testAnswer = 'change answer';

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
      stackForm.find('FormControl').simulate('change', { target: { value: testTitle }});
    });

    it('updates the title in state', () => {
      expect(stackForm.state().title).toEqual(testTitle);
    });
  });

  describe('when adding a new card', () => {
    beforeEach(() => {
      stackForm.find('Button').at(0).simulate('click');
    });

    afterEach(() => {
      stackForm.setState({ cards: [] });
    });

    it('adds a new card to the state', () => {
      expect(stackForm.state().cards.length).toEqual(1);
    });

    it('renders the prompt section', () => {
      expect(stackForm.find('FormLabel').at(1).props().children).toEqual('Prompt:');
    });

    it('renders the answer section', () => {
      expect(stackForm.find('FormLabel').at(2).props().children).toEqual('Answer:');
    });

    describe('and updating the card prompt', () => {
      beforeEach(() => {
        stackForm.find('FormControl').at(1).simulate('change', { target: { value: testPrompt }});
      });

      it('updates the prompt in the state', () => {
        expect(stackForm.state().cards[0].prompt).toEqual(testPrompt);
      });
    });

    describe('and updating the card answer', () => {
      beforeEach(() => {
        stackForm.find('FormControl').at(2).simulate('change', { target: { value: testAnswer }});
      });

      it('updates the answer in the state', () => {
        expect(stackForm.state().cards[0].answer).toEqual(testAnswer);
      });
    });

  });
});