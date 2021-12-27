import * as React from 'react';
import { shallow, mount } from 'enzyme';

import { DataContainer, DataContainerProps } from '.';

const props: DataContainerProps = {
  sectionName: 'Section',
}


describe('components/dataContainerp tests', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<DataContainer {...props}>I am the children </DataContainer>);
    expect(wrapper.find('div.data-container').length).toBe(1);
    expect(wrapper.find('div.items-container').length).toBe(1);
  });
});