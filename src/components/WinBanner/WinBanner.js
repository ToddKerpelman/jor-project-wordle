import React from 'react';
import Banner from '../Banner/Banner';

function WinBanner({ numberOfGuesses }) {
  return <Banner condition="happy">
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong>{" " + numberOfGuesses} guesses</strong>.
    </p>
  </Banner>
}

export default WinBanner;
