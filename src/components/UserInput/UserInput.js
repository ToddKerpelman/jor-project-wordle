import React, { useState } from 'react';

function UserInput({ guessMade }) {

  const [guess, setGuess] = useState('');

  const inputHandler = (event) => {
    // Strip out anything that's not a letter -- 5 letters max
    const lettersOnly = event.target.value.replace(/[^a-zA-Z]/g, '').slice(0, 5);

    setGuess(lettersOnly.toUpperCase());
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.info({ guess });
    guessMade(guess);
    setGuess('');
  }

  return <div>
    <form className="guess-input-wrapper" onSubmit={formSubmitHandler}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input pattern="\w{5,5}" required title="Enter a valid 5 letter word" id="guess-input" type="text" value={guess} onChange={inputHandler} />
    </form>
  </div>;
}

export default UserInput;
