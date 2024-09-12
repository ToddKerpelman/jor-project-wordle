import React from 'react';
import GridGuess from '../GridGuess/GridGuess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessHistory({ guesses }) {

  return <div className="guessResults">
    {range(0, NUM_OF_GUESSES_ALLOWED).map(index => {
      // Do we need to create a UUID for each guess? Eh, probably not.
      return <GridGuess key={index} guess={guesses[index] ?? "     "} />
    })}
  </div>;
}

export default GuessHistory;
