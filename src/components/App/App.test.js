import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import local from '../../data/local'
import science from '../../data/science';

describe('App', () =>{
  let wrapper;
  let mockEvent = {
    target: {
      name: 'science'
    }
  }
  let article = [{
    id: 2,
    headline: 'Giant Chicken Skeleton In Denver’s Central Library Stands For More Than Just Dinner',
    img: 'https://i0.wp.com/wp-cpr.s3.amazonaws.com/uploads/2019/09/cpr-swolf_black-cube-monumental_DSC8170.jpg?resize=2064,1376',
    description: 'The 24-foot-tall chicken skeleton towers over the people who pass through the main hall of the Denver Central Library. Skeletal wings extend to the side, and it looks downright prehistoric.',
    url: 'https://www.cpr.org/2019/09/27/giant-chicken-skeleton-in-denvers-central-library-stands-for-more-than-just-dinner/'
  }]

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should start with local as the current property', () => {
    expect(wrapper.state('current')).toEqual(local)
  });

  it('should change the current property when changeSelectedNews is called', () => {
    wrapper.instance().changeSelectedNews(mockEvent);
    expect(wrapper.state('current')).toEqual(science)
  })

  it('should search through news articles based on input', () => {
    wrapper.instance().searchNews('chicken');
    expect(wrapper.state('current')).toEqual(article)
  })
})
