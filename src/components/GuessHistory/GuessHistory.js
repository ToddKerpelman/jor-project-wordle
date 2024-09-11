import React from 'react';

function GuessHistory({ guesses }) {

  return <div class="guessResults">
    {
      guesses.map((guess, index) => <p className="guess" key={index}>{guess}</p>)
    }
  </div>;
}

export default GuessHistory;
