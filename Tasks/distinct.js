// Refactor following solution
// Return an array without duplicates

'use strict';

const DISTINCT = (array) => {
  const seen = new Set();
  return array.filter(
    (item) => typeof item === 'number' && !seen.has(item) && seen.add(item),
  );
};

module.exports = DISTINCT;
