import React, { useState, useRef } from 'react';
import BrailleDisplay from '../BrailleDisplay';
import './BrailleDisplaySimulator.scss';

const BrailleDisplaySimulator = () => {
  const [numOfActiveCells, setNumOfActiveCells] = useState(14);

  const selectRef = useRef();

  const updatePrefs = () => {
    const cellsSelect = selectRef.current;
    setNumOfActiveCells(parseInt(cellsSelect.value, 10));
    console.log(numOfActiveCells);
  }

  const sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque. Aliquet risus feugiat in ante metus dictum at. Bibendum arcu vitae elementum curabitur. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus.';

  return (
    <div className="braille-display-simulator">
      <h1>Refreshable Braille Display Simulator</h1>
      <BrailleDisplay 
        numOfCells={numOfActiveCells}
        sentence={sentence.toLowerCase()} 
      />
      <section className="preferences">
        <h2>Update your preferences:</h2>
        <section className="preference preference__num-of-cells">
          <h3>Number of cells: </h3>
          <select ref={selectRef}>
            <option value="14" selected>14 cells</option>
            <option value="20">20 cells</option>
            <option value="40">40 cells</option>
          </select>
        </section>
        <button 
          className="preferences__save-btn"
          type="button"
          onClick={updatePrefs}
        >
          Update Preferences
        </button>
      </section>
    </div>
  );
}

export default BrailleDisplaySimulator;
