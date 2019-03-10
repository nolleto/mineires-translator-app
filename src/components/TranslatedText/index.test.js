import React from 'react';
import TranslatedText from './index';
import { shallow } from 'enzyme';

const shallowComponent = (props = {}) => {
  const finalProps = {
    text: '',
    ...props
  };

  return shallow(
    <TranslatedText
      {...finalProps}
    />
  );
};

describe('TranslatedText component', () => {
  describe('Snapshot', () => {
    it('when has no text', () => {
      const snapshot = shallowComponent({ text: '' });

      expect(snapshot).toMatchSnapshot();
    });

    it('when has text', () => {
      const snapshot = shallowComponent({
        text: 'some text'
      });

      expect(snapshot).toMatchSnapshot();
    });

    it('when has two text', () => {
      const snapshot = shallowComponent({
        text: 'some text\nanother text'
      });

      expect(snapshot).toMatchSnapshot();
    });
  });
});
