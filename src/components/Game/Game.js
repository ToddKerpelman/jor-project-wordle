import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import UserInput from '../UserInput/UserInput';
import GuessHistory from '../GuessHistory/GuessHistory';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WinBanner from '../WinBanner';
import LoseBanner from '../LoseBanner/LoseBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);
  const [isWinner, setIsWinner] = React.useState(false);
  const guessMade = (guess) => {
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
    if (guess === answer) {
      setGameOver(true);
      setIsWinner(true);
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameOver(true);
      setIsWinner(false);
    }
  }

  // Fine, let's do it Josh's way...
  const endGameBanner = (gameOver) &&
    (isWinner ? <WinBanner numberOfGuesses={guesses.length} /> : <LoseBanner answer={answer} />);

  return <><div>You should guess some stuff</div>
    <GuessHistory guesses={guesses} answer={answer} />
    <UserInput guessMade={guessMade} disabled={gameOver} />
    {endGameBanner}
  </>;
}

export default Game;
