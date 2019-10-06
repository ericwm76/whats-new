import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () =>{
  let wrapper;
  const mockChangeSelectedNews = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<Menu changeSelectedNews={mockChangeSelectedNews}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should run changeSelectedNews when Local button is clicked', () => {
    wrapper.find('.menu-btn').at(0).simulate('click');
    expect(mockChangeSelectedNews).toHaveBeenCalled();
  })

  it('should run changeSelectedNews when Science button is clicked', () => {
    wrapper.find('.menu-btn').at(1).simulate('click');
    expect(mockChangeSelectedNews).toHaveBeenCalled();
  })

  it('should run changeSelectedNews when Technology button is clicked', () => {
    wrapper.find('.menu-btn').at(2).simulate('click');
    expect(mockChangeSelectedNews).toHaveBeenCalled();
  })

  it('should run changeSelectedNews when Health button is clicked', () => {
    wrapper.find('.menu-btn').at(3).simulate('click');
    expect(mockChangeSelectedNews).toHaveBeenCalled();
  })

  it('should run changeSelectedNews when Entertainment button is clicked', () => {
    wrapper.find('.menu-btn').at(4).simulate('click');
    expect(mockChangeSelectedNews).toHaveBeenCalled();
  })
})