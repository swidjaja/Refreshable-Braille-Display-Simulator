import React from 'react';
import './BrailleDisplaySimulator.scss';
import BrailleDisplay from '../BrailleDisplay';

const BrailleDisplaySimulator = () => {
  const sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque. Aliquet risus feugiat in ante metus dictum at. Bibendum arcu vitae elementum curabitur. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus.';

  return (
    <div className="braille-display-simulator">
      <h1>Refreshable Braille Display Simulator</h1>
      <BrailleDisplay sentence={sentence.toLowerCase()} />
    </div>
  );
}

export default BrailleDisplaySimulator;
