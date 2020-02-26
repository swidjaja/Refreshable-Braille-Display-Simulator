import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BrailleDisplayCellPreference = (props) => {
  const {
    setNumOfActiveCells,
    setShowCharacter,
  } = props;

  const [showCharacterChecked, setShowCharacterChecked] = useState(false);

  const updateNumOfCells = (evt) => {
    const value = evt.target.value;
    setNumOfActiveCells(value);
  };

  const onShowCharacterChecked = () => {
    setShowCharacterChecked(!showCharacterChecked);
    setShowCharacter(!showCharacterChecked);
  };

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
  setNumOfActiveCells: PropTypes.func,
};

export default BrailleDisplayCellPreference;
