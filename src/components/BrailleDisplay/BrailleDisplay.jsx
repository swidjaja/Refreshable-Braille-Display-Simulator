import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BrailleCellPage from '../BrailleCellPage';
import './BrailleDisplay.scss';

class BrailleDisplay extends Component {
  constructor(props) {
    super(props);

    const { sentence, numOfCells } = props;

    this.pages = this._generatePages(sentence, numOfCells);

    this.state = {
      page: 0,
    }
  }

  _setPage(page) {
    this.setState({ page });
  }

  _generatePages(sentence, numOfCells) {
    const pages = [];
    let start = 0;

    do {
      pages.push(sentence.substring(start, start + numOfCells));
      start += numOfCells;
    } while (start < sentence.length);

    return pages;
  }

  render() {
    const { page } = this.state;
    console.log(page, this.pages[page]);

    return (
      <div className="braille-display">
        <button
          className="braille-display__nav braille-display__nav--prev-page"
          disabled={page === 0}
          aria-label="Flip to previous page"
          onClick={() => this._setPage(page - 1)}
        >
        </button>
        <BrailleCellPage words={this.pages[page]} />
        <button
          className="braille-display__nav braille-display__nav--next-page"
          disabled={page === this.pages.length - 1}
          aria-label="Flip to next page"
          onClick={() => this._setPage(page + 1)}
        >
        </button>
      </div>
    );
  }
}

BrailleDisplay.propTypes = {
  sentence: PropTypes.string.isRequired,
  numOfCells: PropTypes.number,
};

BrailleDisplay.defaultProps = {
  numOfCells: 14,
};

export default BrailleDisplay;
