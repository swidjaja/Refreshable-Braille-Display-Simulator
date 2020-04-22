import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import getQuotes from '../../lib/quotes';

const QuotesSelector = (props) => {
  const {
    setSelectedText
  } = props;

  const allQuotes = getQuotes();

  const [text, setText] = useState(allQuotes[0].quote);

  const onAuthorChosen = (evt) => {
    const value = evt.target.value;
    setText(value);
  };

  useEffect(() => {
    setSelectedText(text);
  }, [setSelectedText, text]);

  return (
    <section className="preference preference__quotes">
      <h3>Quotes By:</h3>
      <select aria-label="Select author of quote" onChange={onAuthorChosen}>
        {allQuotes.map(({ id, author, quote}, idx) => (
          <option key={id} value={quote} selected={idx === 0}>{author}</option>
        ))}
      </select>
    </section>
  );
}

export default QuotesSelector;