import rootReducer from './index';
import * as actions from '../actions';
import { stack, stacks } from '../data/fixtures';

const defaultObject = { stack: {}, stacks: [] };

describe('root reducer', () => {
  it('returns the initial state by default', () => {
    expect(rootReducer({}, {})).toEqual(defaultObject);
  });

  it('sets the main stack', () => {
    expect(rootReducer({}, { type: actions.SET_STACK, stack })).toEqual('foo');
  });

  it('loads stacks', () => {
    expect(rootReducer({}, { type: actions.LOAD_STACKS, stacks })).toEqual({stack: {}, stacks});
  });

  it('adds a stack', () => {
    const testStack = { id: 3, title: 'stackity stack', cards: [] };
    expect(rootReducer({}, { type: actions.ADD_STACK, testStack })).toEqual({stack: {}, stacks: [{...testStack, id: 0}]});
  });
});

