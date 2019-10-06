import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer'

describe('NewsContainer', () =>{
  let mockArticles = [{ headline: "James joyce", img: "portrait of the artist", description: "as a young man"}, { headline: "Harry Potter", description: "Wizarding is cool", img: "hogwarts"}]
  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<NewsContainer
      current={mockArticles}
    />)
    expect(wrapper).toMatchSnapshot();
  })
})