import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BrailleCellPage from '../BrailleCellPage';

const BrailleDisplay = (props) => {
  const {
    numOfCells,
    sentence,
    showCharacter,
  } = props;

  const [page, setPage] = useState(0);

  const generatePages = (sentence, numOfCells) => {
    const pages = [];
    let start = 0;

    do {
      pages.push(sentence.substring(start, start + numOfCells));
      start += numOfCells;
    } while (start < sentence.length);

    return pages;
  };

  const pages = generatePages(sentence, numOfCells);

  return (
    <div className={`braille-display braille-display--${numOfCells}`}>
      <button
        className="braille-display__nav braille-display__nav--prev-page"
        disabled={page === 0}
        aria-label="Flip to previous page"
        onClick={() => setPage(page - 1)}
      >
      </button>
      <BrailleCellPage
        words={pages[page]} 
        showCharacter={showCharacter}
      />
      <button
        className="braille-display__nav braille-display__nav--next-page"
        disabled={page === pages.length - 1}
        aria-label="Flip to next page"
        onClick={() => setPage(page + 1)}
      >
      </button>
    </div>
  );
};

BrailleDisplay.propTypes = {
  sentence: PropTypes.string.isRequired,
  numOfCells: PropTypes.number,
  showCharacter: PropTypes.bool.isRequired,
};

BrailleDisplay.defaultProps = {
  numOfCells: 14,
};

export default BrailleDisplay;
