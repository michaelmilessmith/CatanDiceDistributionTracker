"use strict"

import React from "react";
import ReactDOM from "react-dom";

import Chart from "./components/Chart";
import numbers from "./numbers"

ReactDOM.render(
  <Chart numbers={numbers} />,
  document.getElementById("container")
);
