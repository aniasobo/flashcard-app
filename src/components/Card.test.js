import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './Card';

configure({ adapter: new Adapter() });

const props = { card: { prompt: 'test prompt', answer: 'test answer' }};

describe('Card', () => {
  const card = shallow(<Card {...props}/>);

  it('sets `reveal` to be `false`', () => {
    expect(card.state().reveal).toBe(false);
  });

  it('renders the prompt', () => {
    expect(card.find('.card-prompt h4').text()).toEqual(props.card.prompt);
  });

  it('renders the answer', () => {
    expect(card.find('.card-answer h4').text()).toEqual(props.card.answer);
  });


  it('renders default class `text-hidden`', () => {
    expect(card.find('.card-answer h4').hasClass('text-hidden')).toBe(true);
  });
});