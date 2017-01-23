"use strict"

import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import Chart from "../src/components/Chart";

describe("<Chart/>", () => {
  it("contains a <NumberBox/> for each item in the array passed in", () => {
    const wrapper = shallow(<Chart numbers={[1,2,3,4,5,6,7,8,9,10,11]} />);
    expect(wrapper.find("NumberBox").length).to.equal(11);
  });
  it("calculates the highest count and passes it to each <NumberBox/>", () => {
    const wrapper = shallow(<Chart numbers={[
      { "number": 2, "count": 0 },
      { "number": 3, "count": 0 }]} />
    );
    expect(wrapper.find("NumberBox").first().props().highest).to.equal(0);
    wrapper.instance()._handlePlus(2);
    wrapper.instance()._handlePlus(3);
    wrapper.instance()._handlePlus(3);
    expect(wrapper.find("NumberBox").first().props().highest).to.equal(2);
  });
  describe("_handlePlus(numberToAddTo)", () => {
    it("updates the state, adding a count to the number passed in", () => {
      const wrapper = shallow(<Chart numbers={[
        { "number": 2, "count": 0 },
        { "number": 3, "count": 0 }]} />
      );
      expect(wrapper.state("numbers")[0].count).to.equal(0);
      wrapper.instance()._handlePlus(2);
      expect(wrapper.state("numbers")[0].count).to.equal(1);
    });
  });
});
