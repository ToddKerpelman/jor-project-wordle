import React from 'react';
import { range } from '../../utils';

function GridGuess({ guess }) {

  return <p className="guess">
    {range(0, 5).map(i => {
      return <span key={i} className="cell">{guess[i]}</span>
    })}

  </p>;
}

export default GridGuess;
