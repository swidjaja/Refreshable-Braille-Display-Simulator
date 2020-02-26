import React from 'react';
import PropTypes from 'prop-types';

const BrailleCell = (props) => {
  const { 
    character,
    brailleCharacter,
    showCharacter,
  } = props;

  return (
    <div className="braille-cell">
      <div className="braille-row">
        <span className={`braille-dot ${brailleCharacter[0] ? 'braille-dot--active' : ''}`}></span>
        <span className={`braille-dot ${brailleCharacter[1] ? 'braille-dot--active' : ''}`}></span>
      </div>
      <div className="braille-row">
        <span className={`braille-dot ${brailleCharacter[2] ? 'braille-dot--active' : ''}`}></span>
        <span className={`braille-dot ${brailleCharacter[3] ? 'braille-dot--active' : ''}`}></span>
      </div>
      <div className="braille-row">
        <span className={`braille-dot ${brailleCharacter[4] ? 'braille-dot--active' : ''}`}></span>
        <span className={`braille-dot ${brailleCharacter[5] ? 'braille-dot--active' : ''}`}></span>
      </div>
      <div className="braille-row">
        <span className={`braille-dot ${brailleCharacter[6] ? 'braille-dot--active' : ''}`}></span>
        <span className={`braille-dot ${brailleCharacter[7] ? 'braille-dot--active' : ''}`}></span>
      </div>
      {showCharacter && (<div className="character-row">{character}</div>)}
    </div>
  );
};

BrailleCell.propTypes = {
  character: PropTypes.string.isRequired,
  brailleCharacter: PropTypes.arrayOf(PropTypes.bool).isRequired,
  showCharacter: PropTypes.bool.isRequired,
};

export default BrailleCell;
