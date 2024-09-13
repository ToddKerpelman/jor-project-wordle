import React from 'react';

function Banner({ condition, children }) {
  return <div className={`${condition} banner`}>
    {children}
  </div>
}

export default Banner;
