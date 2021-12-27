import * as React from 'react';
import { shallow, mount } from 'enzyme';

import { PeoplePage, PeoplePageDataProps, PeoplePageMethodsProps } from '.';

const props: PeoplePageDataProps & PeoplePageMethodsProps = {
  people: [],
  fetchPeople: jest.fn(),
}


describe('pages/peoplePage tests', () => {
  it('should call fetchItemList', () => {
    const wrapper = mount(<PeoplePage {...props} />);
    expect(props.fetchPeople).toHaveBeenCalled();
  });  
});