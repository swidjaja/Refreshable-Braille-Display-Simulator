import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import BrailleCell from '../BrailleCell';
import brailleCharacters from '../../lib/uncontracted-braille-chars';

const BrailleCharacters = () => {
  const sortedBrailleCharacters = Object.keys(brailleCharacters)
    .sort((a, b) => a - b);
  return (
    <div className="braille-characters-cheatsheet">
      { sortedBrailleCharacters.map((brailleCharacter, idx) => (
        <BrailleCell
          /* eslint-disable-next-line react/no-array-index-key */
          key={`braille-cell-cheatsheet-${idx}`}
          character={brailleCharacter}
          brailleCharacter={brailleCharacters[brailleCharacter]}
          showCharacter
          size="small"
        />
      ))}
    </div>
  );
};

export default BrailleCharacters;
