import * as actions from './index';
import { stack, stacks } from '../data/fixtures';

describe('actions', () => {
  it('creates an action that sets the main stack', () => {
    const expectedAction = { type: actions.SET_STACK, stack };
    expect(actions.setStack(stack)).toEqual(expectedAction);
  });

  it('creates an action that loads available stacks', () => {
    const loadingAction = { type: actions.LOAD_STACKS, stacks };
    expect(actions.loadStacks(stacks)).toEqual(loadingAction);
  });

  it('creates an action that adds a stack', () => {
    const additionAction = { type: actions.ADD_STACK, stack };
    expect(actions.addStack(stack)).toEqual(additionAction);
  });

});