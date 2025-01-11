// Refactor following solution
// Return an array without duplicates

'use strict';

const DISTINCT = (array) => {
  const uniqueNumbers = new Set();
  const result = [];

  for (const item of array) {
    if (typeof item === 'number' && !uniqueNumbers.has(item)) {
      uniqueNumbers.add(item);
      result.push(item);
    }
  }

  return result;
};

module.exports = DISTINCT;
