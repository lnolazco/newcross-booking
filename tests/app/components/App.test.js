import React from 'react';
import { shallow } from 'enzyme';

import App from '../../../app/components/App';
import Summary from '../../../app/components/Summary';
import DurationPackage from '../../../app/components/DurationPackage';
import Skills from '../../../app/components/Skills';
import Address from '../../../app/components/Address';

const props = {
  skillsSelected: [],
  setClientSummary: jest.fn(),
  setDurationPackage: jest.fn(),
  setAddress: jest.fn(),
  createPackage: jest.fn(),
  setGender: jest.fn(),
  setAccessInstructions: jest.fn(),
  setUniformDetails: jest.fn(),
};

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App.WrappedComponent {...props} />);
  });

  test('should exist', () => {
    expect(wrapper).toBeTruthy();
  });

  test('should add 2 Summary components', () => {
    expect(wrapper.find(Summary)).toHaveLength(2);
  });

  test('should add DurationPackage component', () => {
    expect(wrapper.find(DurationPackage)).toHaveLength(1);
  });

  test('should add Skills component', () => {
    expect(wrapper.find(Skills)).toHaveLength(1);
  });

  test('should add Address component', () => {
    expect(wrapper.find(Address)).toHaveLength(1);
  });
});
