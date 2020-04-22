/**
 * Source: https://www.goodreads.com/quotes
 */
const quotes = [
  {
    author: 'Mahatma Gandhi',
    quote: 'Be the change that you wish to see in the world.',
  },
  {
    author: 'J.K. Rowling',
    quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
  },
  {
    author: 'Mark Twain',
    quote: "If you tell the truth, you don't have to remember anything.",
  },
  {
    author: 'Eleanor Roosevelt',
    quote: "No one can make you feel inferior without your consent.",
  },
  {
    author: 'Roy T. Bennett',
    quote: "Believe in your infinite potential. Your only limitations are those you set upon yourself.",
  }
];

export default () => {
  const allQuotes = [...quotes];
  allQuotes.sort((quoteA, quoteB) => {
    const a = quoteA.author.toUpperCase();
    const b = quoteB.author.toUpperCase();
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });

  return allQuotes.map(({ author, quote }, idx) => ({
    id: `quote-${idx}`,
    author,
    quote,
  }));
};
