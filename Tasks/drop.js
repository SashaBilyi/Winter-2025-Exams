// Refactor following solution
// Delete listed keys from dictionary

'use strict';

const DroP = (object, ...keysToDrop) => {
  for (const key of Object.keys(object)) {
    if (keysToDrop.includes(key)) {
      delete object[key];
    }
  }
  return object;
};

module.exports = DroP;
