// Refactor following solution
// Return an array without duplicates

'use strict';

const DISTINCT = (data) => {
  const A = new Set();
  const filteredData = [];

  for (const value of data) {
    if (typeof value === 'number' && !A.has(value)) {
      A.add(value);
      filteredData.push(value);
    }
  }

  return filteredData;
};

module.exports = DISTINCT;
