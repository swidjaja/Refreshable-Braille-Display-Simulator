/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import QuotesSelector from '../QuotesSelector';

const BrailleDisplayCellPreference = (props) => {
  const {
    setNumOfActiveCells,
    setShowCharacter,
    setSelectedText,
  } = props;

  const [showCharacterChecked, setShowCharacterChecked] = useState(false);

  const updateNumOfCells = (evt) => {
    const { target: { value } } = evt;
    setNumOfActiveCells(parseInt(value, 10) || 14);
  };

  const onShowCharacterChecked = () => {
    setShowCharacterChecked(!showCharacterChecked);
  };

  useEffect(() => {
    setShowCharacter(showCharacterChecked);
  }, [setShowCharacter, showCharacterChecked]);

  return (
    <section className="braille-display-preferences">
      <h2>Update your preferences:</h2>
      <section className="preference preference__num-of-cells">
        <h3>Number of cells: </h3>
        <select aria-label="Select number of cells" onChange={updateNumOfCells}>
          <option value="14" selected>14 cells</option>
          <option value="20">20 cells</option>
          <option value="40">40 cells</option>
        </select>
      </section>
      <QuotesSelector
        setSelectedText={setSelectedText}
      />
      <div className="preference preference__show-characters">
        <input
          type="checkbox"
          id="showCharsCheckbox"
          checked={showCharacterChecked}
          onChange={onShowCharacterChecked}
        />
        <label htmlFor="showCharsCheckbox">Show characters</label>
      </div>
    </section>
  );
};

BrailleDisplayCellPreference.propTypes = {
  setNumOfActiveCells: PropTypes.func.isRequired,
  setShowCharacter: PropTypes.func.isRequired,
  setSelectedText: PropTypes.func.isRequired,
};

export default BrailleDisplayCellPreference;
