import React, { useState } from 'react';
import BrailleCharactersCheatSheet from '../BrailleCharactersCheatSheet';
import BrailleDisplay from '../BrailleDisplay';
import BrailleDisplayPreferences from '../BrailleDisplayPreferences';

const BrailleDisplaySimulator = () => {
  const [numOfActiveCells, setNumOfActiveCells] = useState(14);
  const [showCharacter, setShowCharacter] = useState(false);
  const [selectedText, setSelectedText] = useState('');
  const [showBrailleCheatsheet, setShowBrailleCheatsheet] = useState(true);

  return (
    <div className="braille-display-simulator">
      <h1>Refreshable Braille Display Simulator</h1>
      <BrailleDisplay 
        numOfCells={numOfActiveCells}
        sentence={selectedText.toLowerCase()}
        showCharacter={showCharacter}
      />
      <div className="braille-display-simulator__options-panel">
        <BrailleDisplayPreferences
          setNumOfActiveCells={setNumOfActiveCells}
          setShowCharacter={setShowCharacter}
          showCharacter={showCharacter}
          setSelectedText={setSelectedText}
          showBrailleCheatsheet={showBrailleCheatsheet}
          setShowBrailleCheatsheet={setShowBrailleCheatsheet}
        />
        {showBrailleCheatsheet && <BrailleCharactersCheatSheet />}
      </div>
    </div>
  );
}

export default BrailleDisplaySimulator;
