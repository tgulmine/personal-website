import { mount } from 'enzyme';
import Projects from './Projects';
import React from 'react';
import { ProjectCard } from '../ProjectCard';
import data from '../../data/data.json';

describe('Projects', () => {
  it('renders correct number of project cards', () => {
    const wrapper = mount(<Projects />);

    expect(wrapper.find(ProjectCard).length).toEqual(data.projects.length);
  });
});
