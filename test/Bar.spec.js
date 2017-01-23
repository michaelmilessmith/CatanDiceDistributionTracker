import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Bar from '../src/components/Bar';

describe('<Bar/>', () => {
  it('contains a single div', () => {
    const wrapper = shallow(<Bar />);
    expect(wrapper.find('div').length).to.equal(1);
  });
  it('contains a div with a class representing the count over the highest count', () => {
    const wrapper = shallow(<Bar count={5} highest={10}/>);
    expect(wrapper.find('div.bar-50').length).to.equal(1);
  });
  it('contains a span with the current count', () => {
    const wrapper = shallow(<Bar count={5}/>);
    expect(wrapper.find('span').text()).to.equal("5");
  });
});
