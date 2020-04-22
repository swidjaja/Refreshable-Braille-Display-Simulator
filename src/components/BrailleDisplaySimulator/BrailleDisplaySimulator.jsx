import React, { useState } from 'react';
import BrailleDisplay from '../BrailleDisplay';
import BrailleDisplayPreferences from '../BrailleDisplayPreferences';

const BrailleDisplaySimulator = () => {
  const [numOfActiveCells, setNumOfActiveCells] = useState(14);
  const [showCharacter, setShowCharacter] = useState(false);
  const [selectedText, setSelectedText] = useState('');

  return (
    <div className="braille-display-simulator">
      <h1>Refreshable Braille Display Simulator</h1>
      <BrailleDisplay 
        numOfCells={numOfActiveCells}
        sentence={selectedText.toLowerCase()}
        showCharacter={showCharacter}
      />
      <BrailleDisplayPreferences
        setNumOfActiveCells={setNumOfActiveCells}
        setShowCharacter={setShowCharacter}
        setSelectedText={setSelectedText}
      />
    </div>
  );
}

export default BrailleDisplaySimulator;
