import React from 'react';
import { checkGuess } from '../../game-helpers';
function GridGuess({ guess, answer }) {
  const results = checkGuess(guess, answer);

  return <p className="guess">
    {results.map((result, index) => {
      // Meh. Not super crazy about checking for space characters.
      const classes = `cell ${result.letter !== " " ? result.status : ""}`;
      return <span key={index} className={classes}>{result.letter}</span>
    })}

  </p>;
}

export default GridGuess;
