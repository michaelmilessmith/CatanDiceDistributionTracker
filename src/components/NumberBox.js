"use strict"

import React from "react";
import Number from "./Number";
import Bar from "./Bar";


const NumberBox = ({ number, count, highest, onClick }) => (
  <div>
    <Number onClick={onClick} number={number} />
    <Bar count={count} highest={highest} />
  </div>
);

export { NumberBox as default }
