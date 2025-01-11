// Refactor following solution
// Return an array without duplicates

'use strict';

const DISTINCT = (data) => {
  const A = new Set();
  const filteredData = [];

  for (const value of data) {
    if (!A.has(value)) {
      A.add(value);
      filteredData.push(value);
    }
  }

  return filteredData.filter((x) => typeof x === 'number');
};

module.exports = DISTINCT;
