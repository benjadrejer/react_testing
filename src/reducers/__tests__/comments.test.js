import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  const mockValue = 'New Comment';
  const action = {
    type: SAVE_COMMENT,
    payload: mockValue,
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual([mockValue]);
});

it('handles actions with unknown type', () => {
  const newState = commentsReducer([], {}); // No type is an unknown type
  expect(newState).toEqual([]);
});