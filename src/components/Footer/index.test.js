import Footer from './index';
import React from 'react';
import { shallow } from 'enzyme';

describe('Footer component', () => {
  it('matches snapshot', () => {
    const snapshot = shallow(<Footer />);

    expect(snapshot).toMatchSnapshot();
  });
});
