import Header from './index';
import React from 'react';
import { shallow } from 'enzyme';

describe('Header component', () => {
  it('matches snapshot', () => {
    const snapshot = shallow(<Header />);

    expect(snapshot).toMatchSnapshot();
  });
});
