import rootReducer from './index';
import * as actions from '../actions';
import { stack, stacks } from '../data/fixtures';

const defaultObject = { stack: {}, stacks: [] };

describe('root reducer', () => {
  it('returns the initial state by default', () => {
    expect(rootReducer({}, {})).toEqual(defaultObject);
  });
});

