import InputText from './index';
import React from 'react';
import { shallow } from 'enzyme';

const shallowComponent = (props = {}) => {
  const allProps = {
    setText: jest.fn(),
    ...props
  };

  return shallow(
    <InputText
      {...allProps}
    />
  );
};

describe('InputText component', () => {
  describe('Snapshot', () => {
    it('when has no text', () => {
      const snapshot = shallowComponent();

      expect(snapshot).toMatchSnapshot();
    });

    it('when has text', () => {
      const snapshot = shallowComponent({ text: 'some text' });

      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Event Listeners', () => {
    it('when textarea changes calls "setText" with the new text', () => {
      const setText = jest.fn();
      const value = 'new text';
      const component = shallowComponent({ setText });
      const textarea = component.find('textarea');
      textarea.simulate('change', { target: { value } });

      expect(setText).toBeCalledWith(value);
    });
  });
});
