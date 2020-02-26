import React, { useState } from 'react';
import BrailleDisplay from '../BrailleDisplay';
import BrailleDisplayPreferences from '../BrailleDisplayPreferences';

const BrailleDisplaySimulator = () => {
  const [numOfActiveCells, setNumOfActiveCells] = useState(14);
  const [showCharacter, setShowCharacter] = useState(false);

  const sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque. Aliquet risus feugiat in ante metus dictum at. Bibendum arcu vitae elementum curabitur. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus.';

  return (
    <div className="braille-display-simulator">
      <h1>Refreshable Braille Display Simulator</h1>
      <BrailleDisplay 
        numOfCells={numOfActiveCells}
        sentence={sentence.toLowerCase()}
        showCharacter={showCharacter}
      />
      <BrailleDisplayPreferences
        setNumOfActiveCells={setNumOfActiveCells}
        setShowCharacter={setShowCharacter}
      />
    </div>
  );
}

export default BrailleDisplaySimulator;
