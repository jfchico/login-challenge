import * as React from 'react';
import { shallow, mount } from 'enzyme';

import { ItemCard, ItemCardProps } from '.';

const props: ItemCardProps = {
  name: "Card",
  info: [{
    label: 'label',
    value: 'value',
  }],
};

describe('components/itemCard tests', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<ItemCard {...props} />);
    expect(wrapper.find('div.card').length).toBe(1);
    expect(wrapper.find('div.middle-section').length).toBe(1);
  });
});