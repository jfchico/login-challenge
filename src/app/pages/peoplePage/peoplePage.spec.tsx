import * as React from 'react';
import { mount } from 'enzyme';

import { PeoplePage, PeoplePageDataProps, PeoplePageMethodsProps } from '.';

const props: PeoplePageDataProps & PeoplePageMethodsProps = {
  people: [],
  loggedUser: {email:'user@email', name:'User Name', tokenId: 'token_id'},
  fetchPeople: jest.fn(),
}


describe('pages/peoplePage tests', () => {
  it('should call fetchItemList', () => {
    const wrapper = mount(<PeoplePage {...props} />);
    expect(props.fetchPeople).toHaveBeenCalled();
  });  
});