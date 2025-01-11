// Refactor following solution
// Delete listed keys from dictionary

'use strict';

const DroP = (object, ...keysToDrop) =>
  Object.keys(object).reduce((result, key) => {
    if (!keysToDrop.includes(key)) {
      result[key] = object[key];
    }
    return result;
  }, {});

module.exports = DroP;
