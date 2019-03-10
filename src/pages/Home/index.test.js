import Home from './index';
import React from 'react';
import { shallow } from 'enzyme';

describe('Home page', () => {
  it('matches snapshot', () => {
    const snapshot = shallow(<Home />);

    expect(snapshot).toMatchSnapshot();
  });
});
