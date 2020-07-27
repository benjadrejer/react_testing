import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentList from 'components/CommentList';

let wrapped;
let mockOne = 'Comment 1';
let mockTwo = 'Comment 2';

beforeEach(() => {
  const initialState = {
    comments: [mockOne, mockTwo],
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('creates one <li> per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
  const text = wrapped.render().text();
  expect(text).toContain(mockOne);
  expect(text).toContain(mockTwo);
});