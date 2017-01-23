"use strict"

import React from "react";

const Number = ({ number, onClick }) => (
  <div onClick={onClick}>{number}</div>
);

export { Number as default }
