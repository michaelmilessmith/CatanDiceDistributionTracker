"use strict"

import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import sinon from "sinon";

import Number from "../src/components/Number";

describe("<Number/>", () => {
  it("contains a single div containing the number passed to it", () => {
    const wrapper = shallow(<Number number={3} />);
    expect(wrapper.find("div").length).to.equal(1);
    expect(wrapper.find("div").text()).to.equal("3");
  });
  it("calls a function passed in when clicked", () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<Number onClick={onClick}/>);
    wrapper.find('div').simulate('click');
    expect(onClick).to.have.property('callCount', 1);
  });
});
