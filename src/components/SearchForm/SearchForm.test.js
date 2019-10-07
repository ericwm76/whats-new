import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () =>{
  let mockSearchNews = jest.fn();
  let mockEvent = { target: 
    { value: 'Scooby', keyCode: 13 }
  }
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SearchForm 
        searchNews={mockSearchNews}
      />
    )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it('should call handleChange on change in the input field', () => {
  //   wrapper.find('input').simulate('change');
  // })

  it('should update state when handleChange is called', () => {
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('searchInput')).toEqual('Scooby')
  });

  it('should call searchNews when Submit is clicked', () => {
    wrapper.find('button').simulate('click');
    expect(mockSearchNews).toHaveBeenCalled();
  });

  it('should call searchNews when enter is pressed', () => {
    wrapper.simulate('keyDown');
    expect(mockSearchNews).toHaveBeenCalled();
  });
});