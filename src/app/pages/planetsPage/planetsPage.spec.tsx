import * as React from 'react';
import { mount } from 'enzyme';

import { PlanetsPageMethodsProps, PlanetsPageDataProps, PlanetsPage } from '.';

const props: PlanetsPageDataProps & PlanetsPageMethodsProps = {
  planets: [],
  loggedUser: {email:'user@email', name:'User Name', tokenId: 'token_id'},
  fetchPlanets: jest.fn(),
}


describe('pages/planetsPage tests', () => {
  it('should call fetchItemList', () => {
    const wrapper = mount(<PlanetsPage {...props} />);
    expect(props.fetchPlanets).toHaveBeenCalled();
  });  
});