import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import UserInput from '../UserInput/UserInput';
import GuessHistory from '../GuessHistory/GuessHistory';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const guessMade = (guess) => {
    setGuesses([...guesses, guess]);
  }

  return <><div>You should guess some stuff</div>
    <GuessHistory guesses={guesses} answer={answer} />
    <UserInput guessMade={guessMade} />
  </>;
}

export default Game;
