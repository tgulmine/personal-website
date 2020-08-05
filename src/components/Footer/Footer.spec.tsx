import { mount } from 'enzyme';
import Footer from './Footer';
import React from 'react';

describe('Footer', () => {
  it('renders correct text', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find('div').text()).toEqual('Made by Thiago Gulmine2020');
  });
});
