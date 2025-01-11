// Refactor following solution
// Sum all number values in dict

'use strict';

const count = (obj) =>
  Object.entries(obj).reduce(
    (sum, [, value]) => (typeof value === 'number' ? sum + value : sum),
    0,
  );

module.exports = count;
