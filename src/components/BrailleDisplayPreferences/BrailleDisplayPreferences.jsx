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
    showCharacter,
    setSelectedText,
    showBrailleCheatsheet,
    setShowBrailleCheatsheet,
  } = props;

  const [showCharacterChecked, setShowCharacterChecked] = useState(showCharacter);
  const [showBrailleCheatSheetChecked, setShowBrailleCheatSheetChecked] = useState(showBrailleCheatsheet);

  const updateNumOfCells = (evt) => {
    const { target: { value } } = evt;
    setNumOfActiveCells(parseInt(value, 10) || 14);
  };

  const onShowCharacterChecked = () => {
    setShowCharacterChecked(!showCharacterChecked);
  };

  const onShowCharacterCheatSheetChecked = () => {
    setShowBrailleCheatSheetChecked(!showBrailleCheatSheetChecked);
  }

  useEffect(() => {
    setShowCharacter(showCharacterChecked);
  }, [setShowCharacter, showCharacterChecked]);

  useEffect(() => {
    setShowBrailleCheatsheet(showBrailleCheatSheetChecked);
  }, [setShowBrailleCheatsheet, showBrailleCheatSheetChecked]);

  return (
    <section className="braille-display-preferences">
      <h2>Update your preferences:</h2>
      <section className="preference preference__num-of-cells">
        <span>Number of cells: </span>
        <select
          aria-label="Select number of cells"
          defaultValue={14}
          onChange={updateNumOfCells}
        >
          <option value="14">14 cells</option>
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
      <div className="preference preference__show-characters">
        <input
          type="checkbox"
          id="showCheatSheetCheckbox"
          checked={showBrailleCheatSheetChecked}
          onChange={onShowCharacterCheatSheetChecked}
        />
        <label htmlFor="showCheatSheetCheckbox">Show Braille CheatSheet</label>
      </div>
    </section>
  );
};

BrailleDisplayCellPreference.propTypes = {
  setNumOfActiveCells: PropTypes.func.isRequired,
  setShowCharacter: PropTypes.func.isRequired,
  showCharacter: PropTypes.bool.isRequired,
  setSelectedText: PropTypes.func.isRequired,
  showBrailleCheatsheet: PropTypes.bool.isRequired,
  setShowBrailleCheatsheet: PropTypes.func.isRequired,
};

export default BrailleDisplayCellPreference;
