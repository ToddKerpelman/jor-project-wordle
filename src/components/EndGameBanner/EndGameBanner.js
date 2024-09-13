import React from 'react';

function EndGameBanner({ gameOver, win, numberOfGuesses, answer }) {
  console.log(`Number of guesses is ${numberOfGuesses}`);
  if (gameOver) {
    if (win) {
      return <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{" " + numberOfGuesses} guesses</strong>.
        </p>
      </div>
    } else {
      return <div class="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    }
  }
}

export default EndGameBanner;
