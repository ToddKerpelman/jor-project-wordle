import React from 'react';
import GridGuess from '../GridGuess/GridGuess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessHistory({ guesses, answer }) {

  return <div className="guessResults">
    {range(0, NUM_OF_GUESSES_ALLOWED).map(index => {
      return <GridGuess key={index} guess={guesses[index] ?? "     "} answer={answer} />
    })}
  </div>;
}

export default GuessHistory;
