import * as React from 'react';
import { shallow, mount } from 'enzyme';

import { PeoplePage, PeoplePageDataProps, PeoplePageMethodsProps } from '.';

const props: PeoplePageDataProps & PeoplePageMethodsProps = {
  people: [],
  fetchPeople: jest.fn(),
}


describe('pages/itemListPage tests', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<PeoplePage {...props} />);
    expect(wrapper.find('div.main-container').length).toBe(1);
    expect(wrapper.find('div.items-container').length).toBe(1);
  });

  it('should call fetchItemList', () => {
    const wrapper = mount(<PeoplePage {...props} />);
    expect(props.fetchPeople).toHaveBeenCalled();
  });  
});