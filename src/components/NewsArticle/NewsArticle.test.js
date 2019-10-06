import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () =>{
  let mockArticle = { headline: "Harry Potter", description: "Wizarding is cool", img: "hogwarts", url: "https://www.wizardingworld.com/"};
  let wrapper = shallow(<NewsArticle headline={mockArticle.headline} img={mockArticle.img} description={mockArticle.description} url={mockArticle.url} key='1' id='1' />)
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})