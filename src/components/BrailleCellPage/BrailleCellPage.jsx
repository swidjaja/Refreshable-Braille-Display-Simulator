import React from 'react';
import PropTypes from 'prop-types';
import BrailleCell from '../BrailleCell';
import brailleCharacters from '../../lib/uncontracted-braille-chars';

const BrailleCellPage = (props) => {
  const {
    showCharacter,
    words
  } = props;

  return (
    <div className="braille-cell-page">
      { words.split('').map((character, idx) => (
        <BrailleCell
          key={idx}
          character={character}
          brailleCharacter={brailleCharacters[character]}
          showCharacter={showCharacter}
        />
      ))}
    </div>
  );
};

BrailleCellPage.propTypes = {
  showCharacter: PropTypes.bool.isRequired,
  words: PropTypes.string.isRequired,
}

export default BrailleCellPage;
