import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
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
          /* eslint-disable-next-line react/no-array-index-key */
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
