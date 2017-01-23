import React from 'react';

const Bar = ({ count = 0, highest = 0 }) => (
  <div className={`bar bar-${Math.round((count * 100) / highest)}`}>
    <span className="bar-label">{count}</span>
  </div>
);

export {Bar as default}
