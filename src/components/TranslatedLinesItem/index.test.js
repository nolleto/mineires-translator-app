import * as capitalize from 'capitalize';
import * as translator from '../../mineires/translator';

import { mount, shallow } from 'enzyme';

import React from 'react';
import TranslatedLinesItem from './index';

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

const mountComponent = (props = {}) => {
  const finalProps = {
    text: '',
    ...props
  };

  return mount(
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

  describe('Text parser', () => {
    beforeAll(() => {
      translator.default = jest.fn(text => text);
      mountComponent({ text: 'some text' });
    });

    it('calls capitalize', () => {
      expect(capitalize.default).toBeCalled();
    });

    it('calls mineires translator', () => {
      expect(translator.default).toBeCalled();
    });
  });
});
