// Refactor following solution
// Get day number

'use strict';

let D = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const _parse_day_ = (s) => {
  for (const [i, day] of D.entries()) {
    if (s.startsWith(day.toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = _parse_day_;
