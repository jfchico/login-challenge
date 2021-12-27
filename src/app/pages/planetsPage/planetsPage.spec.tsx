import * as React from 'react';
import { shallow, mount } from 'enzyme';

import { PlanetsPageMethodsProps, PlanetsPageDataProps, PlanetsPage } from '.';

const props: PlanetsPageDataProps & PlanetsPageMethodsProps = {
  planets: [],
  fetchPlanets: jest.fn(),
}


describe('pages/planetsPage tests', () => {
  it('should call fetchItemList', () => {
    const wrapper = mount(<PlanetsPage {...props} />);
    expect(props.fetchPlanets).toHaveBeenCalled();
  });  
});