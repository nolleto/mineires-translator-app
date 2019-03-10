import React from 'react';
import TranslatedLines from './index';
import { shallow } from 'enzyme';

const shallowComponent = (props = {}) => {
  const finalProps = {
    lines: [],
    ...props
  };

  return shallow(
    <TranslatedLines
      {...finalProps}
    />
  );
};

describe('TranslatedLines component', () => {
  describe('Snapshot', () => {
    it('when has no lines', () => {
      const snapshot = shallowComponent({ lines: [] });

      expect(snapshot).toMatchSnapshot();
    });

    it('when has lines', () => {
      const snapshot = shallowComponent({
        lines: [
          'line 1',
          'line 2',
        ]
      });

      expect(snapshot).toMatchSnapshot();
    });

    it('when has lines and empty lines', () => {
      const snapshot = shallowComponent({
        lines: [
          'line 1',
          'line 2',
          '',
          'lines 3'
        ]
      });

      expect(snapshot).toMatchSnapshot();
    });
  });
});
