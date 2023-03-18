import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import BrailleCell from '../BrailleCell';
import brailleCharacters, { emptyCell } from '../../lib/uncontracted-braille-chars';

const BrailleCellPage = (props) => {
  const {
    numOfCells,
    showCharacter,
    words
  } = props;

  const characters = words.split('');
  const cells = [];

  for (let i = 0; i < characters.length; i += 1) {
    cells[i] = characters[i];
  }

  for (let i = characters.length; i < numOfCells; i += 1) {
    cells[i] = null;
  }

  return (
    <div className="braille-cell-page">
      { cells.map((character, idx) => (
        <BrailleCell
          /* eslint-disable-next-line react/no-array-index-key */
          key={`braille-cell-${idx}`}
          character={character}
          brailleCharacter={character ? brailleCharacters[character] : emptyCell }
          showCharacter={showCharacter}
        />
      ))}
    </div>
  );
};

BrailleCellPage.propTypes = {
  numOfCells: PropTypes.number.isRequired,
  showCharacter: PropTypes.bool.isRequired,
  words: PropTypes.string.isRequired,
}

export default BrailleCellPage;
