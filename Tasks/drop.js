// Refactor following solution
// Delete listed keys from dictionary

'use strict';

const DroP = (object, ...keysToDrop) => {
  const keys = Object.keys(object);
  keys.forEach((key) => {
    if (keysToDrop.includes(key)) {
      delete object[key];
    }
  });
  return object;
};

module.exports = DroP;
