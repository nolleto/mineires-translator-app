import React from 'react';
import TranslatedLinesItem from './index';
import { shallow } from 'enzyme';

const shallowComponent = (props = {}) => {
  const finalProps = {
    text: '',
    ...props
  };

  return shallow(
    <TranslatedLinesItem
      {...finalProps}
    />
  );
};

describe('TranslatedLinesItem component', () => {
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
  });
});
