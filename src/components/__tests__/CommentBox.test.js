import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(<Root><CommentBox /></Root>);
});

afterEach(() => {
  wrapped.unmount();
});

it('has a textarea and two buttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

describe('the textarea', () => {
  let mockValue;
  beforeEach(() => {
    mockValue = 'new comment';
    const textarea = wrapped.find('textarea');
    textarea.simulate('change', {
      target: {
        value: mockValue,
      },
    });
    wrapped.update();
  });

  it('has a textarea that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual(mockValue);
  });
  
  it('empties textarea on form submit', () => {
    const form = wrapped.find('form');
    form.simulate('submit', {
      preventDefault: () => {},
    });
    wrapped.update();
  
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});