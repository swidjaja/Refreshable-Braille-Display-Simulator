import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

const BrailleCell = (props) => {
  const { 
    character,
    brailleCharacter,
    showCharacter,
    size,
  } = props;

  return (
    <div className="braille-cell">
      <div className="braille-row">
        <span className={`braille-dot braille-dot--${size} ${brailleCharacter[0] ? 'braille-dot--active' : ''}`} />
        <span className={`braille-dot braille-dot--${size} ${brailleCharacter[4] ? 'braille-dot--active' : ''}`} />
      </div>
      <div className="braille-row">
        <span className={`braille-dot braille-dot--${size} ${brailleCharacter[1] ? 'braille-dot--active' : ''}`} />
        <span className={`braille-dot braille-dot--${size} ${brailleCharacter[5] ? 'braille-dot--active' : ''}`} />
      </div>
      <div className="braille-row">
        <span className={`braille-dot braille-dot--${size} ${brailleCharacter[2] ? 'braille-dot--active' : ''}`} />
        <span className={`braille-dot braille-dot--${size} ${brailleCharacter[6] ? 'braille-dot--active' : ''}`} />
      </div>
      <div className="braille-row">
        <span className={`braille-dot braille-dot--${size} ${brailleCharacter[3] ? 'braille-dot--active' : ''}`} />
        <span className={`braille-dot braille-dot--${size} ${brailleCharacter[7] ? 'braille-dot--active' : ''}`} />
      </div>
      {showCharacter && (<div className="character-row">{character}</div>)}
    </div>
  );
};

BrailleCell.defaultProps = {
  size: 'large',
};

BrailleCell.propTypes = {
  character: PropTypes.string.isRequired,
  brailleCharacter: PropTypes.arrayOf(PropTypes.bool).isRequired,
  showCharacter: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(['small', 'large']),
};

export default BrailleCell;
