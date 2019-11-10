import React from 'react';
import PropTypes from 'prop-types';
import BrailleCell from '../BrailleCell';
import brailleCharacters from '../../lib/uncontracted-braille-chars';
import './BrailleCellPage.scss';

const BrailleCellPage = (props) => {
  const { words } = props;
  const brailleChars = words.split('')
    .map(word => brailleCharacters[word]);

  return (
    <div className="braille-cell-page">
      { brailleChars.map((brailleChar, idx) => (
        <BrailleCell key={idx} brailleCharacters={brailleChar} />
      ))}
    </div>
  );
}

BrailleCellPage.propTypes = {
  words: PropTypes.string.isRequired,
}

export default BrailleCellPage;
