"use strict"

import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import sinon from "sinon";

import NumberBox from "../src/components/NumberBox";

describe("<NumberBox/>", () => {
  it("contains one number and one bar component", () => {
    const wrapper = shallow(<NumberBox number={3} />);
    expect(wrapper.find("Number").length).to.equal(1);
    expect(wrapper.find("Bar").length).to.equal(1);
  });
  it("calls a function passed in when clicked", () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<NumberBox onClick={onClick}/>);
    wrapper.find('Number').simulate('click');
    expect(onClick).to.have.property('callCount', 1);
  });
});
