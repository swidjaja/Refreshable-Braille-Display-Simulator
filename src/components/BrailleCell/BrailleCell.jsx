import React from 'react';
import PropTypes from 'prop-types';
import './BrailleCell.scss';

const BrailleCell = (props) => {
  const { brailleCharacters } = props;

  return (
    <div className="braille-cell">
      <div className="braille-row">
        <span className={`braille-dot ${brailleCharacters[0] ? 'braille-dot--active' : ''}`}></span>
        <span className={`braille-dot ${brailleCharacters[1] ? 'braille-dot--active' : ''}`}></span>
      </div>
      <div className="braille-row">
        <span className={`braille-dot ${brailleCharacters[2] ? 'braille-dot--active' : ''}`}></span>
        <span className={`braille-dot ${brailleCharacters[3] ? 'braille-dot--active' : ''}`}></span>
      </div>
      <div className="braille-row">
        <span className={`braille-dot ${brailleCharacters[4] ? 'braille-dot--active' : ''}`}></span>
        <span className={`braille-dot ${brailleCharacters[5] ? 'braille-dot--active' : ''}`}></span>
      </div>
      <div className="braille-row">
        <span className={`braille-dot ${brailleCharacters[6] ? 'braille-dot--active' : ''}`}></span>
        <span className={`braille-dot ${brailleCharacters[7] ? 'braille-dot--active' : ''}`}></span>
      </div>
    </div>
  );
}

BrailleCell.propTypes = {
  brailleCharacters: PropTypes.arrayOf(PropTypes.bool).isRequired,
};

export default BrailleCell;
